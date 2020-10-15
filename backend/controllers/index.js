const { json } = require("body-parser")
const models = require("../models")

// const addUser = async () => {
//     await models.User_details
// }

async function addUser(user_id, username, password, status) {
    return await models.user_details.create({
        user_id: user_id,
        username: username,
        password: password,
        status: status
    })
} 

const getUsers = async () => {
    const all_users = await models.user_details.findAll({raw:true})
    console.log(all_users)
    return all_users
}

function addit(){
    return {
        'status': 200,
        'name': "HAROLD",
        'date': "25-09-2020"
    }
};

function anoda1(a, b){
    console.log(a + b);
    console.log(typeof(a));
    return {
        'status': 220,
        'sum': parseInt(a) + parseInt(b)
    }
};



class User {
    
    getAllUsers(){
        return {
            'status': 200,
            'name': "HAROLD",
            'date': "25-09-2020"
        }
    };
    
    getUser(){
        console.log(a + b);
        console.log(typeof(a));
        return {
            'status': 220,
            'sum': parseInt(a) + parseInt(b)
        }
    };

    editUserInfo(){

    };

    deletedUser(){

    };
}


module.exports = {addit, anoda1, addUser, getUsers}