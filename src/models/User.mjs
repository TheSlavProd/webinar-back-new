import { DataTypes } from "sequelize";
import { sequelize } from "../../db.mjs";

export const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
  timestamps: true
});

// Create the table if it doesn't exist
User.sync({alter: true});
