//input express router
const express = require('express');
const router = express.Router();

const gameController = require('./controllers/game');
const startGameController = require('./controllers/play-game');
const userController = require("./controllers/user.js");
const dashboardController = require('./controllers/dashboard');

router.get('/', gameController.index);              
router.get('/game', startGameController.index);     
router.get('/users', userController.get);       
router.get('/user', userController.getById);        //user per id ex:localhost:8000/user?id=1
router.get('/login', userController.loginIndex);    
router.post('/login', userController.loginAdmin);   
router.get('/dashboard',dashboardController.userList);  
router.get('/dashboard/create',dashboardController.createUserTampilan);    
router.post('/dashboard/create',dashboardController.createUser);           
router.get('/dashboard/detail/:id',dashboardController.userDetail);
router.get('/dashboard/delete/:id',dashboardController.deleteUser);
router.get('/dashboard/update/:id',dashboardController.updateUserTampilan);
router.post('/dashboard/update/:id',dashboardController.updateUser);
    
module.exports = router;