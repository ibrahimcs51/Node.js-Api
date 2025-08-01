import joi from 'joi';

const userSchema=joi.object({
    name:joi.string().required(),
    email:joi.string().required(),
    password:joi.string().required()


})
// app.get('/api')



export{
    userSchema
}