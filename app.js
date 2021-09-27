const express = require('express');
const morgan = require('morgan');
//express app
const app = express();

//register view engine 
app.set('view engine', 'ejs');


// listen for requests
app.listen(3000);
//middleware & static files

app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/',(req,res)=>{
// res.send('<p>home page</p>');
const blogs = [
{title:'yoshi finds eggs', snippet:'lorem ipsum'},
{title:'ggggg', snippet:'kkkkkkkk'},
{title:'jjjjjjjjjjj', snippet:'hjjjjj'}
];
res.render('index', { title: 'Home', blogs});
});

app.get('/about',(req,res)=>{
    // res.send('<p>About page</p>');
    res.render('about', {title: 'About'});
    });

    app.get('/about-us',(req,res)=>{
        // res.send('<p>About page</p>');
        res.render('about',{title: 'About'});
        });

        //create blog
        app.get('/blogs/create',(req,res)=>{
            res.render('create',{title:'create a new blog'});
        });
//404 page
     app.use((req,res) => {
    res.status(404).render('404',{title:'404'});
    })   