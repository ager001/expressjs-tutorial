import express, { Router } from 'express';
import router from './routes.js';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());



//Middleware

app.use('/welcome',(req, res,next)=>{
  console.log("Anew request received at" + Date.now());
  next()
})



//Routes

//Home route
app.get("/", (req, res)=>{
  res.send('Hello Express.js')
})

app.get("/welcome", (req, res)=>{
  res.send('Welcome to Express.js')
})


app.use('/user', router)

app.post('/users', (req, res)=>{
        const {name, email} = req.body;
        res.json({
          message: `User ${name} with email ${email} created successfully` 
        })
})

app.put("/users/:id",(req, res)=>{
    const userId = req.params.id;
    const {name, email} = req.body;
    res.json({
      message:`User ${userId} updated to ${name}, ${email}`
    })
  
})




// Start server
app.listen(PORT, () => {
  console.log(`Tuko ndani ya Server.....on port ${PORT}`);
});