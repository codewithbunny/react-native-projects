import express from "express";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import userController from "../../Controllers/userController.js";

const User = mongoose.model('User');

const router = express.Router();

userController

router.post('/signup', userController.signup

// async (req, res) => {
//     // console.log();
//     const {email, password } = req.body;
//     try{
//         const user = new User({email, password});
//         await user.save();

//         const token = jsonwebtoken.sign({ userId: user._id }, 'SECRET_KEY')
    
//         res.send({ token });
//     }
//     catch (error){
//         res.status(422).send(error.message);
//     }
// }

);

router.post('/signin', async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password){
        return res.status(422).send({error: 'Must provide email and password'});
    }

    const user = await User.findOne({ email });
    if(!user) {
        return res.status(404).send({error: 'Email not found'})
    }

    try{
        await user.comparePassword(password);
        const token = jsonwebtoken.sign({userId: user._id}, 'SECRET_KEY');
        res.send({token});
    }
    catch (err){
        return res.status(422).send({error: 'Invalid password or email'});
    }
});

export const authRoutes = router;