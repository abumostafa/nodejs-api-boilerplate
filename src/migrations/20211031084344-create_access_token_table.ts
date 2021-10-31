import { DataTypes, QueryInterface } from "sequelize"

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable("accessToken", {
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
        type: DataTypes.CHAR(36),
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    })

    return queryInterface.addConstraint("accessToken", {
      type: "foreign key",
      fields: ["userId"],
      references: {
        table: "user",
        field: "id"
      },
      onDelete: "",
      onUpdate: ""
    })
  },

  down: async (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("accessToken")
  }
}
