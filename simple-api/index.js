// import express from "express";
// import cors from 'cors';
// const app = express();
// const port = 3000;



// app.use(cors());
// app.use(express.json());

// app.post('/user',(req,res)=>{
//     const { name } = req.body;

//     if(!name){
//         return   res.status(400).json({message:"name is required"});
        
//     }

//     res.status(201).json({message: `User ${name} has added successfully!`});
// });





// app.listen(port,()=>{
//     console.log('server is running at port 3000')
// });

// app.get('/hello',(req,res)=>{
//     res.send("hello , world");
// })



const express = require('express');
const cors = require('cors'); // add this line
const app = express();
const port = 3000;

app.use(cors()); // allow frontend requests
app.use(express.json());
let users = [];
let age = [];
app.post('/user', (req, res) => {
  const { name } = req.body;
  const {num} = req.body;

  if (!name ) {
    return res.status(400).json({ message: 'Name is required' });
  }
   if (!age ) {
    return res.status(400).json({ message: 'age is required' });
  }
  users.push(name);
  age.push(num); // store the name
  res.status(201).json({ message: `User '${name}' and '${num}' has been added successfully!` });

  res.status(201).json({ message: `User '${name}' and '${num}' has been added successfully!` });
});

app.get('/users',(req,res)=>{
    res.json({users});
    res.json({age});
});

app.get('/age',(req,res)=>{
    res.json({age});
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
