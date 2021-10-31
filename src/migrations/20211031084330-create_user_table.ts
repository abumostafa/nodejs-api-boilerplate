import { DataTypes, QueryInterface, UUIDV4 } from "sequelize"

export default {
  up: async (queryInterface: QueryInterface) => {
    return queryInterface.createTable("user", {
      id: {
        type: DataTypes.CHAR(36),
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
    })
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("user")
  }
}
