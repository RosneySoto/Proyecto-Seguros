const store = require('./store')

function addUser(name, lastName, email, password){

    if(!name || !lastName || !email, !password){
        return Promise.reject('Invalid Name');
    }

    const user = {
        name,
        lastName,
        email,
        password
    };
    return store.add(user);
};

async function login(email, password){
    return new Promise((resolve, reject) => {
        if(!email || !password){
            reject('Error, debe ingresar email y password')
            return false
        }
        const result = store.login(email, password)
        resolve(result)
    });
};

function getUsers(){
    return new Promise ((resolve, reject) => {
        resolve(store.list());
    })
};

function getUserbyId(id){
    return store.userById(id);
};

function getUserByName(name){
    return store.userByName(name)
};

async function deleteUser(id){
    if(!id){
        reject("No se selecciono ningun ID")
        return false
    }
    return new Promise((resolve, reject) =>{
        const result = store.delete(id)
        resolve(result);
    });
};

module.exports = {
    addUser,
    getUsers,
    getUserbyId,
    getUserByName,
    deleteUser,
    login,
}