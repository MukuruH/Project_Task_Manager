const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:password1@localhost:5432/project_manager')

const models = {
    user_details: sequelize.import('./user_details'),
    task: sequelize.import('./task'),
    task_detail: sequelize.import('./task_detail'),
    task_extensions: sequelize.import('./task_extensions'),
    workspace: sequelize.import('./workspace'),
    workspace_user_access: sequelize.import('./workspace_user_access')
}

Object.keys(models).forEach((modelName) =>{
    if('associate' in models[modelName]){
        models[modelName].associate(models)
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;