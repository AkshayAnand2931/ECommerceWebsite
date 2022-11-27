import express from 'express'
import dotenv from 'dotenv';
import mongodb from 'mongodb';
import bcrypt from 'bcryptjs';


const app = express();
const MongoClient = mongodb.MongoClient;

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var data = [];
var users = [];

app.use(function(req,res,next){
    if(data.length === 0)
    {
        MongoClient.connect(process.env.MONGODB_URI,function(err,db){
            if(err) throw err;
            var dbo = db.db("Apparel");
            dbo.collection("Products").find().toArray(function(err,docs){
                if(err) throw err
                data = data.concat(docs);
                console.log("data is ",data.length)
                next();
            })
        })
    }
    else
    {
        next();
    }
        
})

app.use(function(req,res,next){
    if(users.length === 0)
    {
        MongoClient.connect(process.env.MONGODB_URI,function(err,db){
            if(err) throw err;
            var dbo = db.db("Apparel");
            dbo.collection("Users").find().toArray(function(err,docs){
                if(err) throw err
                users = users.concat(docs);
                console.log("users is ",users.length)
                next();
            })
        })
    }
    else
    {
        next();
    }
        
})


app.get("/api/products/home",function(req,res)
{
    res.send(data);
});

app.get("/api/products/men",function(req,res)
{
    const product = data.filter(x => x.gender === 'Men');
    if(product)
    {
        res.send(product);
    }
    else
    {
        res.send({message:"Product not found"});
    }
});

app.get("/api/products/women",function(req,res)
{
    const product = data.filter(x => x.gender === 'Women');
    if(product)
    {
        res.send(product);
    }
    else
    {
        res.send({message:"Product not found"});
    }
});

app.get("/api/products/kids",function(req,res)
{
    const product = data.filter(x => x.gender === 'Kids');
    if(product)
    {
        res.send(product);
    }
    else
    {
        res.send({message:"Product not found"});
    }
});

app.get("/api/products/shoes",function(req,res)
{
    const product = data.filter(x => x.type === 'shoes');
    if(product)
    {
        res.send(product);
    }
    else
    {
        res.send({message:"Product not found"});
    }
});

app.get("/api/products/slug/:slug",function(req,res)
{
    const product = data.find(x => x.slug === req.params.slug);
    if(product)
    {
        res.send(product);
    }
    else
    {
        res.send({message:"Product not found"});
    }
});

app.get("/api/search/:query",function(req,res)
{
    const gender = data.filter(x => x.gender === req.params.query );
    const name = data.filter(x => x.name === req.params.query );
    const brand = data.filter(x => x.brand === req.params.query );

    const product = brand.concat(gender,name);

    if(product)
    {
        res.send(product);
    }
    else
    {
        res.send({message:"Product not found"});
    }
});

app.post('/api/users/signin',function(req,res)
{
    const valid = users.filter(x => x.email === req.body.email);
    const pass = valid.filter(x => bcrypt.compareSync(req.body.password,x.password))

    if(pass.length === 0)
    {
        res.send({message:"no users"})
    }
    else
    {
        res.send(pass);
    }
})

app.post('/api/signup',function(req,res){
    MongoClient.connect(process.env.MONGODB_URI,function(err,db){
        if(err) throw err;
        var dbo = db.db("Apparel");
        req.body.password = bcrypt.hashSync(req.body.password)
        console.log(req.body)
        dbo.collection('Users').insertOne(req.body);
    })
})

app.get('/api/users/:user',function(req,res)
{
    console.log('profile')
    const id = req.params.user;
    const user = users.filter(x => x._id == id);

    if(user.length >= 1)
    {
        res.send(user[0]);
    }
    else
    {
        res.send({message:"no users"})
    }
})


const port =  process.env.PORT || 5000;
app.listen(port,function()
{
    console.log(`serve at http://localhost:${port}`);
});

