import { DataTypes } from "sequelize/types";
import { sequelize } from ".";

export default(sequelize, DataTypes) => {
    const User_details = sequelize.define('user_details', {
        user_id : {
            type: DataTypes.INTEGER,
        }
    })
}