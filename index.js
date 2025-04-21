const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const users = [
  { username: 'Amol',  email: 'alice@example.com',Password: "Amol@1234",DateOfBirth: 8/4/2006 },
  { username: 'Pavan',  email: 'bob@example.com',Password:"Pavan@1234",DateOfBirth :5/2/2006 },
  { username: 'Santhosh',  email: 'charlie@example.com',Password:"Santhosh@1234",DateOfBirth:7/4/2006 }
];

app.get('/username', (req, res) => {
  const name = req.query.user;
  if (!name?.trim()) return res.status(400).json({ message: 'Username cannot be empty' });

app.get('/email', (req, res) => {
  const email = req.query.email;
  if (!email?.trim()) return res.status(400).json({ message: 'Email cannot be empty' });

  const Password = ('/password',(req,res)=>{
    const Password =  req.query.Password;
    if(Password<8) return ({message: "Password length should be greater than 8"}) 
        else if(Password>16) 
    return({message: "Password length should be lesser than 16"})
  })
})})

app.listen(PORT, () => console.log(`Server running on ${PORT}🚀`));
