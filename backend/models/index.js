const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:password1@localhost:5432/project_manager');

// const models = {
//     User_details:  sequelize.user_details,
//     Task: sequelize.task,
//     Task_detail: sequelize.task_detail,
//     Task_extensions: sequelize.task_extensions,
//     Workspace: sequelize.workspace,
//     Workspace_user_access: sequelize.workspace_user_access
// };

// Object.keys(models).forEach((modelName) =>{
//     if('associate' in models[modelName]){
//         models[modelName].associate(models)
//     }
// });


const user_details  = sequelize.define('user_details', {
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

const workspace_user_access  = sequelize.define('workspace_user_access', {
    workspace_user_asccess_id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    access_level : {
        type: DataTypes.INTEGER,
    },
});

workspace_user_access.associate = (models) => {
    workspace_user_access.belongsTo(models.Workspace, {
        foreignKey: 'workspace_id'
    });
    Workspace_user_access.belongsTo(models.User_details, {
        foreignKey: 'user_id'
    });
};

const task_detail  = sequelize.define('task_detail', {
    task_detail_id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description : DataTypes.TEXT
});

task_detail.associate = (models) => {
    task_detail.belongsTo(models.Task, {
        foreignKey: 'task_id'
    });
};

const task_extensions  = sequelize.define('task_extensions', {
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

task_extensions.associate = (models) => {
    task_extensions.belongsTo(models.User_details, {
        foreignKey: 'changed_by'
    });
    task_extensions.belongsTo(models.Task_detail, {
        foreignKey: 'workspace_id'
    });
};

const Task  = sequelize.define('task', {
    task_id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task_name : {
        type: DataTypes.STRING,
    },
    create_date : DataTypes.DATE,
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

const workspace  = sequelize.define('workspace', {
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

workspace.associate = (models) => {
    workspace.belongsTo(models.User_details, {
        foreignKey: 'created_by'
    });
};

// models.sequelize = sequelize;
// models.Sequelize = Sequelize;

module.exports = {user_details};