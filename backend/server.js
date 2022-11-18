import express from 'express'
//import data from './data.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mongodb from 'mongodb';

const app = express();
const MongoClient = mongodb.MongoClient;

dotenv.config();

//var obj = data.products;

var data = [];

app.use(function(req,res,next){
    MongoClient.connect(process.env.MONGODB_URI,function(err,db){
        if(err) throw err;
        var dbo = db.db("Apparel");
        dbo.collection("Products").find().toArray(function(err,docs){
            if(err) throw err
            data = data.concat(docs);
            next()
        })
        })
        
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

const port =  process.env.PORT || 5000;
app.listen(port,function()
{
    console.log(`serve at http://localhost:${port}`);
});