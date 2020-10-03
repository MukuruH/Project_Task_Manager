export default(sequelize, DataTypes) => {
    const User_details  = sequelize.define('user_details', {
        user_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username : {
            type: DataTypes.STRING,
            unique: true
        },
        password : {
            type: DataTypes.STRING,
        },
        status : {
            type: DataTypes.INTEGER,
        }
    });

    
    return User_details;   
};