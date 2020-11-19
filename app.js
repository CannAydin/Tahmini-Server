require('./models/User');
require('./models/Answers');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const answerRoutes = require('./routes/answerRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();




// Bunu burada kullanman lazım
app.use(bodyParser.json());
app.use(authRoutes);
app.use(answerRoutes);


// username: acd
// password: aIlXmi0js1bDJjh8

//const User = mongoose.model("User")


const mongoUri = "mongodb+srv://acd:aIlXmi0js1bDJjh8@cluster0.m1sfx.mongodb.net/<dbname>?retryWrites=true&w=majority"

// Connect database
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,


})

// if connected 
mongoose.connection.on("connected", () =>{
    console.log("Connected to mongoo");
})

// else 
mongoose.connection.on("error", (err) =>{
    console.log("Error occurred", err)
})


app.get('/', requireAuth, (req,res) =>{
    
    res.send(`Your email: ${req.user.email}`);
})




app.listen(3000, () =>{
    console.log('server running')
})






























/*const user = await Answers.find({ userId: req.user._id });
    Answers.findOneAndUpdate({ user },{
        answers: req.body.answers,
        optionalAnswers: req.body.optionalAnswers
    }).then(data => {
        res.send(data),
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })*/








    /*

app.get('/', (req,res) =>{
    User.find({}).then(data =>{
        res.send(data)
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
})

// post for answers
app.post('/send-data',(req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position,
        answers: req.body.answers,
        username: req.body.username,
        password: req.body.password,
    })
    User.save()
    .then(data => {
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })    
})

// post for sign up
app.post('/signup', async(req,res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    await employee.save()
    .then(data => {
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })    
})

// delete for item
app.post('/delete', (req,res) => {
    User.findByIdAndRemove(req.body.id)
    .then(data => {
        console.log(data)
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
})

// update item
app.post('/update',(req,res) => {
    User.findOneAndUpdate({_id:req.body.id},{
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position,
        answers: req.body.answers
    }).then(data => {
        console.log(data)
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
        
})*/