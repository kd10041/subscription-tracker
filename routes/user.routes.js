import {Router} from 'express';

const userRouter=Router();

userRouter.get('/',(req,res)=> res.send({title:'Get all users'}));

userRouter.get('/:id',(req,res)=> res.send({title:'Get user details'}));

//Create a new user
userRouter.post('/',(req,res)=> res.send({title:'Create new user'}));

//Update a user
userRouter.put('/:id',(req,res)=> res.send({title:'Update existing user'}));

//Delete a user
userRouter.delete('/:id',(req,res)=> res.send({title:'Delete a existing user'}));

export default userRouter;