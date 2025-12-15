import express, { Router } from 'express';
import router from './routes.js';
import multer from 'multer';

const app = express();
const PORT = process.env.PORT || 5000;
const upload = multer();


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(upload.single("image"))


//Middleware

app.use('/welcome',(req, res,next)=>{
  console.log("A new request received at" + Date.now());
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

app.post("/form", (req, res)=>{
  console.log(req.body);
  console.log(req.file);
  
  res.send('Form received successfully!')
  
})





// Start server
app.listen(PORT, () => {
  console.log(`Tuko ndani ya Server.....on port ${PORT}`);
});