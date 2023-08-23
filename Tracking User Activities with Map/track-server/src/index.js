// const express = require('express');
import './models/User.js'
import './models/Track.js'
import express from 'express';
import mongoose from 'mongoose';
import { authRoutes } from './routes/authRoutes.js';
import { trackRoutes } from './routes/trackRoutes.js'
import bodyParser from 'body-parser';
import { requireAuth } from './middlewares/requireAuth.js'

const app = express(); 

app.use(bodyParser.json());
app.use(authRoutes);
app.use(requireAuth);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://tracking:01234567890@tracking.2jx4dmo.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri);
mongoose.connection.on('connected', ()=> {
    console.log('Connected to mongoDB');
});
mongoose.connection.on('error', (err) =>{
    console.error('Error while connecting to mongoDB', err);
});
app.get('/', requireAuth, (req, res) => {
    res.send(`Yourn email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Listening to port 3000');
})