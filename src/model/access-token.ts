import { DataTypes, HasOneGetAssociationMixin, Model, UUIDV4 } from "sequelize"
import { sequelize } from "../app/sequalize"
import { User } from "./user"

export class AccessToken extends Model {
  userId!: string
  accessToken!: string
  refreshToken!: string
  expiresAt!: number
  createdAt!: string
  updatedAt!: string
  getUser!: HasOneGetAssociationMixin<User>
}

AccessToken.init(
  {
    accessToken: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    refreshToken: {
      type: DataTypes.STRING,
      unique: true
    },
    expiresAt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  },
  { timestamps: true, tableName: "accessToken", freezeTableName: true, sequelize }
)
