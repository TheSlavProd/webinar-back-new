import jwt from "jsonwebtoken";
import {JWT_SECRET} from '../config/index.mjs';


export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
  
    if (token) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
      } catch (e) {
        console.log(e)
        return res.status(403).json({
          message: 'Нет доступа',
        });
      }
    } else {
      return res.status(403).json({
        message: 'Нет доступа',
      });
    }
  };