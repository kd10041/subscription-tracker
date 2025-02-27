import {Router} from 'express';

//instance
const subscriptionRouter=Router();

//Routes
subscriptionRouter.get('/',(req,res)=> res.send({title:'Get all subscriptions'}));

subscriptionRouter.get('/:id',(req,res)=> res.send({title:'Get subscription details'}));

subscriptionRouter.post('/',(req,res)=> res.send({title:'Create a new subscription '}));

subscriptionRouter.put('/:id',(req,res)=> res.send({title:'Update subscription details'}));

subscriptionRouter.delete('/:id',(req,res)=> req.send({title:'Delete a subscription detail'}));

subscriptionRouter.get('/users/:id',(req,res)=> res.send({title:'Get subscription of a particular user'}));

subscriptionRouter.put('/:id/cancel',(req,res)=> res.send({title:'Cancel subscription of a particular user'}));

subscriptionRouter.get('/upcoming-renewals',(req,res)=> res.send({title:'Get Upcoming subscription renewals'}))


//export
export default subscriptionRouter;