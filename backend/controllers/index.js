const { json } = require("body-parser")


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


module.exports = {addit, anoda1}