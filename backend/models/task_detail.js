export default(sequelize, DataTypes) => {
    const Task_detail  = sequelize.define('task_detail', {
        task_detail_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description : DataTypes.TEXT
    });

    Task_detail.associate = (models) => {
        Task_detail.belongsTo(models.Task, {
            foreignKey: 'task_id'
        });
    };

    return Task_detail;   
};