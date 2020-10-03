export default(sequelize, DataTypes) => {
    const Workspace_user_access  = sequelize.define('workspace_user_access', {
        workspace_user_asccess_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        access_level : {
            type: DataTypes.INTEGER,
        },
    });

    Workspace_user_access.associate = (models) => {
        Workspace_user_access.belongsTo(models.Workspace, {
            foreignKey: 'workspace_id'
        });
        Workspace_user_access.belongsTo(models.User_details, {
            foreignKey: 'user_id'
        });
    };

    return Workspace_user_access;   
};