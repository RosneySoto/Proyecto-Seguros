const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')
const router = express.Router();

router.post('/', function(req, res){
    controller.addUser(req.body.name, req.body.lastName, req.body.email, req.body.password)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, err);
        })
});

router.post('/login', function(req, res){
    controller.login(req.body.email, req.body.password)
        .then(user => {
            response.success(req, res, user, 201)
        })
        .catch(e => {
            response.error(req, res, 'Error al Loguear usuario', 500, e)
        })
});

router.get('/', function(req, res){
    controller.getUsers()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(err =>{
            response.error(req, res, 'Error', 500, err)
        })
});

router.get('/:id', function(req, res){
    controller.getUserbyId(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch(e=>{
            response.error(req, res, 'Error al buscar por ID', 500, e);
        })
});

router.get('/name/:name', function(req, res){
    controller.getUserByName(req.params.name)
        .then((user) => {
            response.success(req, res, user, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error al buscar por nombre', 500, e)
        })
});

router.delete('/:id', function(req, res){
    controller.deleteUser(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error al eliminar el usuario', 500, e);
        })
});

module.exports = router;