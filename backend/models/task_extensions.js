export default(sequelize, DataTypes) => {
    const Task_extensions  = sequelize.define('task_extensions', {
        task_extension_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        reason : {
            type: DataTypes.STRING,
            allowNotNull: false
        },
        old_start_date : DataTypes.DATEONLY,
        new_start_date : DataTypes.DATEONLY,
        old_end_date: DataTypes.DATEONLY,
        new_end_date : DataTypes.DATEONLY
    });

    Task_extensions.associate = (models) => {
        Task_extensions.belongsTo(models.User_details, {
            foreignKey: 'changed_by'
        });
        Task_extensions.belongsTo(models.Task_detail, {
            foreignKey: 'workspace_id'
        });
    };

    return Task_extensions;   
};