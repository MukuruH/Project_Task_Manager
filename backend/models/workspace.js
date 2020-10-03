export default(sequelize, DataTypes) => {
    const Workspace  = sequelize.define('workspace', {
        workspace_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        workspace_name : {
            type: DataTypes.STRING,
            unique: true
        },
        description : DataTypes.TEXT
    });

    Workspace.associate = (models) => {
        Workspace.belongsTo(models.User_details, {
            foreignKey: 'created_by'
        });
    };

    return Workspace;   
};