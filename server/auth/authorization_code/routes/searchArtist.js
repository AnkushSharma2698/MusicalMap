const mongoose = require('mongoose');
const express = require('express');

const app = express(); 

app.get('/search', (req, res) => {
    res.send("hi");
    
})