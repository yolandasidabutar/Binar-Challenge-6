// inisiasi penggunaan konfigurasi dari file .env
require('dotenv').config();

// import express
const express = require('express');

// import route
const route = require('./route');

// import middlaware untuk 404 not found
const middleware = require('./middleware/404');

//import model
const { user_game, user_game_biodata, user_game_history } = require('./models');

// inisiasi express
const app = express();

// konfigurasi port
const port = process.env.PORT;

// menyajikan folder public secara static
app.use(express.static('public'));

// menggunakan view engine ejs
app.set("view engine", "ejs");

// menerapkan middleware pembaca body
app.use(express.json());
app.use(express.urlencoded({ extended: false}));



// terapkan route di aplikasi
app.use(route);

// terapkan middlaware untuk 404 not found
app.use(middleware);

// jalankan server express
app.listen(port , () => {
    console.log(`This project listening at http://localhost:${port}`);
});