const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
//CONNECT TO MONGODB
const dbURI = "mongodb+srv://netninja:Mm123456@cluster0.2jyrm.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose.connect(dbURI)
.then((result)=>app.listen(3000))
.catch((err) => console.log(err));
//express app
const app = express();

//register view engine 
app.set('view engine', 'ejs');


// listen for requests

//middleware & static files

app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/add-blog',(req,res) => {
const blog = new Blog({
    title: 'new blog 2',
    snippet: 'about my new blog 2',
    body: 'more about my new blog 2'
});

blog.save()
.then((result) =>{
res.send(result)
})
.catch((err) => {
    console.log(err);
});

});

app.get('/all-blogs',(req,res)=>{
    Blog.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
})

app.get('/',(req,res)=>{
// res.send('<p>home page</p>');
res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    // res.send('<p>About page</p>');
    res.render('about', {title: 'About'});
    });

    app.get('/about-us',(req,res)=>{
        // res.send('<p>About page</p>');
        res.render('about',{title: 'About'});
        });


        //blog routes
        app.get('/blogs', (req,res) => {
            Blog.find()
            .then((result)=>{
            res.render('index', {title:'All Blogs', blogs: result})
            })
            .catch((err)=>{
            console.log(err);
            });
        })
        //create blog
        app.get('/blogs/create',(req,res)=>{
            res.render('create',{title:'create a new blog'});
        });
//404 page
     app.use((req,res) => {
    res.status(404).render('404',{title:'404'});
    })   