const express = require('express');
const app = express();
app.use(express.json());

let courses = [
    {id: 1 , name: "java"},
    {id: 2 , name: "python"},
    {id: 3, name: "c++"}
];

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.post('/courses', (req,res) => {
   const ncourse ={
    id: courses.length +1,
    name: req.body.name
   };
   courses.push(ncourse);
   res.json(courses);
   console.log("Add new courses");
});

app.listen(3000, () => {
    console.log("server started");
})