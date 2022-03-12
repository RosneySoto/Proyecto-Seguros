const Model = require('./model');

function addUser(user){
    const myUser = Model(user);
    return myUser.save();
}

function loginUser(email, password){
    return new Promise((resolve, reject) => {
        const login = Model.findOne({
            email: email,
            password: password
        })
        resolve(login)
    })
}

async function getAllusers(){
    const users = await Model.find();
    return users;
}

async function getUserById(id){
    return new Promise((resolve, reject) => {
        const userId = Model.findById(id)
        resolve(userId);
    });
};

async function getUserByName(name){
    return new Promise((resolve, reject) => {
        const userName = Model.findOne({
            name: name
        })
        resolve(userName)
    })
}

function deleteUser(id){
    return Model.deleteOne({
        id: id
    });
};


module.exports = {
    add: addUser,
    list: getAllusers,
    userById: getUserById,
    userByName: getUserByName,
    delete: deleteUser,
    login: loginUser,
}