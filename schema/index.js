import joi from 'joi';

const userSchema=joi.object({
    name:joi.string().required(),
    email:joi.string().required(),
    password:joi.string().required()


})
// app.get('/api')

// app.post('/api/user', (req, res) => {
//     const { error } = userSchema.validate(req.body);    

//     if (error) {
//         return res.status(400).send(error.details[0].message);




export{
    userSchema
}