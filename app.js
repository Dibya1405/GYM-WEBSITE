// BACK-END

const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactGym', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 80;


// Define mongoose schema
const contactSchema = new mongoose.Schema({
    myname: String,
    myage: String,
    myphonenumber: String,
    myemail: String,
    mygender: String,
    mylocality: String,
    text: String
});

const Contact = mongoose.model('Contact', contactSchema);


// USING EXPRESS SERVING STATIC FILES
app.use('/static', express.static('static'))
app.use(express.urlencoded())



// END-POINTS...
app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname+'/index.html'));
})

app.get('/home', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname+'/index.html'));
})

app.get('/index.html', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname+'/index.html'));
})

app.get('/about', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname+'/about.html'));
})

app.get('/about.html', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname+'/about.html'));
})

app.get('/services', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname+'/services.html'));
})

app.get('/services.html', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname+'/services.html'));
})

app.get('/contact', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname+'/contact.html'));
})

app.get('/contact.html', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname+'/contact.html'));
})

app.post('/contact.html', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.status(200).sendFile(path.join(__dirname+'/contact.html'));
    }).catch(()=>{
        res.status(400).send("Oops!! Something went wrong. Please try again after some time.")
    });
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
}); 