import express from 'express'
import dotenv from 'dotenv'
import mongodb, { MongoClient } from 'mongodb'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils'


const userRouter = express.Router()
const MongoClient = mongodb.MongoClient;
dotenv.config()

userRouter.post(
    '/signin',
    expressAsyncHandler(async (req,res)=>{
        MongoClient.connect('mongodb+srv://chiman-09:test028@apparel.8n8zmhj.mongodb.net/?retryWrites=true&w=majority',async function(err,db){
            if(err) throw err;
            const dbo = db.db('Apparel');
            const user = await dbo.collection('Users').findOne({email:req.body.email});
            if(user){
                if(bcrypt.compareSync(req.body.password,user.password)){
                    res.send(
                        {
                            _id:user._id,
                            name:user.name,
                            email:user.email,
                            token:generateToken(user)
                        }
                    );
                    return;
                }
            }
            res.status(401).send({message:'Invalid email or password'});
        })
    })
)
export default userRouter;