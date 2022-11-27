import express from 'express'
import dotenv from 'dotenv';
import mongodb from 'mongodb';
import bcrypt from 'bcryptjs';
import userRouter from './routes/userRoutes';



const app = express();
const MongoClient = mongodb.MongoClient;

dotenv.config();

//var obj = data.products;
/*
MongoClient.connect(process.env.MONGODB_URI,function(err,db){
    if(err) throw err;
    var dbo = db.db('Apparel');
    var obj = [
        {
            name:"Achintya Krishna",
            email:"achi@gmail.com",
            password: bcrypt.hashSync('123456')
        },
        {
            name:"Akshay",
            email:"akshay@gmail.com",
            password: bcrypt.hashSync('108108')
        },
        {
            name:"Aaryan",
            email:"aryan@gmail.com",
            password: bcrypt.hashSync('7089765')
        }
    ];
    dbo.collection('Users').insertMany(obj,function(err,res){
        if(err) throw err;
        db.close();
    })
})
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
var data = [];

app.use(function(req,res,next){
    if(data.length === 0)
    {
        MongoClient.connect(process.env.MONGODB_URI,function(err,db){
            if(err) throw err;
            var dbo = db.db("Apparel");
            dbo.collection("Products").find().toArray(function(err,docs){
                if(err) throw err
                data = data.concat(docs);
            })
        })
    }
    console.log("data is ",data.length)
    next();
        
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

const port =  process.env.PORT || 5000;
app.listen(port,function()
{
    console.log(`serve at http://localhost:${port}`);
});