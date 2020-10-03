export default(sequelize, DataTypes) => {
    const Task  = sequelize.define('task', {
        task_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        task_name : {
            type: DataTypes.STRING,
        },
        create_date : DataTypes.TIMESTAMP,
        start_date : DataTypes.DATEONLY,
        end_date: DataTypes.DATEONLY,
        description : DataTypes.TEXT
    });

    Task.associate = (models) => {
        Task.belongsTo(models.User_details, {
            foreignKey: 'created_by'
        });
        Task.belongsTo(models.Worspace, {
            foreignKey: 'workspace_id'
        });
        Task.belongsTo(models.User_details, {
            foreignKey: 'assidned_to'
        });
    };

    return Task;   
};