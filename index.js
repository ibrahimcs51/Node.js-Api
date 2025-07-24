import express from 'express';
import joi from 'joi';
import {userSchema} from './schema/index.js'
const app = express();
app.use(express.json());
const users = [];

// middleware request
app.use('/',(req,res,next)=>{
    console.log("middleware")
    next()// Es ka payda ham auth kely use krty hain
})

// app.get('/user', (req, res) => {
//   res.send({date: new Date(), message: 'Today date is'});
// }); only check sever 


app.delete('/user/:id',(req,res)=>{
    const {id}=req.params;
    const index=users.findIndex(obj=>obj.id===(id));
    users.splice(index,1);
    res.send({message:"user Deleted "})
})


app.get('/user', (req, res) => {
  res.send({ users });     
});
app.put('/user/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(obj => obj.id === id);

  if (index === -1) {
    return res.status(404).send({ message: "User not found" });
  }


  app.get("/")
  // Merge existing user with updated fields
  users[index] = { ...users[index], ...req.body };

  res.send({ id, message: "User updated successfully", user: users[index] });
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 


app.post('/user', async(req,res)=>{
    
    
    try {
         // console.log("req",req.body )
     await userSchema.validateAsync(req.body)
    users.push({...req.body,id:Date.now().toString(36)})
    res.send({  users:req.body,message: 'user  registration successful ' });
    } catch (err) {
        res. status(400).send({ error:err.details||"something is wrong",status:400,})
        
    }

})