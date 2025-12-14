import express, { Router } from 'express';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());


//Routes

app.get("/", (req, res)=>{
  res.send('Hello Express.js')
})

// Start server
app.listen(PORT, () => {
  console.log(`Tuko ndani ya Server.....on port ${PORT}`);
});