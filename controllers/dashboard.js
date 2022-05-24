//import model
const { user_game, user_game_biodata, user_game_history } = require('../models');

// dashboard
function userList (req,res) {
    user_game.findAll({
        include: user_game_biodata,
    })
    .then((dataUsers=>{
        res.render('dashboard',{dataUsers});
     
    }))
}

// create
function createUserTampilan(req,res){
    res.status(200).render('create');
}

function createUser(req,res) {
    user_game.create({
        username: req.body.username,
        email: req.body.email,
        password : req.body.password,
        user_game_biodatum:{
            gender: req.body.gender,
            date_of_birth : req.body.date_of_birth,
            phone: req.body.phone,
    }},
    { include: {
            model: user_game_biodata
        }
    })
    .then(()=>{
        res.redirect("/dashboard");
    })
}

//detail
function userDetail (req,res) {
    user_game.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: user_game_biodata
        }
    })
    .then(data=>{
        res.render('detail',{data});
     
    })
}

function updateUserTampilan(req,res) {
    user_game.findOne({
        where: { id: req.params.id },
        include: {
            model: user_game_biodata
        }
    })
        .then(data => {
          res.render('update', {data})
        })
}

// update
function updateUser (req, res) {
    user_game.update({
        username: req.body.username,
        email: req.body.email,
        password : req.body.password,
    }, {where: { id: req.params.id },
},)
    user_game_biodata.update({
        gender: req.body.gender,
        date_of_birth : req.body.date_of_birth,
        phone: req.body.phone,
    }, {where: { id_user: req.params.id },
},)
    .then((data => {res.redirect("/dashboard")
    }))
 }


// delete
function deleteUser (req,res) {
    user_game_biodata.destroy({
        where: {
            id_user : req.params.id}
    })
    user_game.destroy({
        where: {
            id : req.params.id }
        })
  
        .then(()=> {
        res.status(200).redirect("/dashboard")
        })
    //     .catch(err => {
    //     res.status(422).send("Tidak bisa menghapus user_game")
    //  })
}


//  ekspor module ke route.js
module.exports = {
    userList,
    createUserTampilan,
    createUser,
    userDetail,
    deleteUser,
    updateUserTampilan,
    updateUser,

}