import jsonwebtoken from "jsonwebtoken";
import mongoose from "mongoose";

const User = mongoose.model('User');

export const requireAuth = (req, res, next) => {
    
    // console.log('User', req.user);
    const { authorization } = req.headers;

    if (!authorization){
        return res.status(401).send({error: 'You must be logged in.'})
    }
    const token = authorization.replace('Bearer ', '');
    jsonwebtoken.verify(token, 'SECRET_KEY', async (err, payload)=> {
        if (err) {
            return res.status(401).send({error: 'You must be logged in'});
        }
        // console.log(payload);

        const { userId } = payload;
        const user = await User.findById(userId);
        // console.log(req.user);
        // console.log(user);
        req.user = user;
        next();
    });
};