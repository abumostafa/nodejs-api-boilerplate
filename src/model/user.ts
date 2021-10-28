import { DataTypes, Model, UUIDV4 } from "sequelize"
import { sequelize } from "../app/sequalize"

export class User extends Model {
  id!: string
  username!: string
  email!: string
  firstName!: string
  lastName!: string
  password!: string
  resetPasswordToken!: string
  createdAt!: string
  updatedAt!: string
}

User.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: UUIDV4,
      primaryKey: true,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      defaultValue: ""
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  },
  { timestamps: true, tableName: "user", freezeTableName: true, sequelize }
)
