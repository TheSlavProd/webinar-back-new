import bcrypt from "bcrypt";
import {User} from "../models/User.mjs";
import jwt from "jsonwebtoken";

import { validationResult } from "express-validator";
import { JWT_SECRET } from "../config/index.mjs";

export const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = await User.create({
      email: req.body.email,
      name: req.body.name,
      password: hash,
      role: 50,
    });
    
    await doc.save();

    res.status(201).json({success:true});
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "can not register",
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      }
    });
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isValidPass) {
      return res.status(404).json({
        message: "not correct login or password",
      });
    }
    const token = jwt.sign(
      {
        id: user.id,
      },
      JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "can not login",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findOne({where: {id: req.userId}});

    if (!user) {
      return res.status(403).json({
        message: "user not acsess",
      });
    }

    res.status(200).json(user.dataValues);
  } catch (error) {}
};
