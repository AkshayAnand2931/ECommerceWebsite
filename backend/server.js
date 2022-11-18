import express from 'express'
import data from './data.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;
//var data =[]

dotenv.config();

var obj = data.products;
const app = express();
/*
app.use(function(req,res,next)
{
    MongoClient.connect(process.env.MONGODB_URI,function(err,db){
        if(err) throw err;
        var dbo = db.db("Apparel");
        dbo.collection("Products").find().toArray(function(err,docs){
            if(err) throw err;
            console.log(docs)
            data = concat(data,docs)
            console.log(data)
            next()
        })
    })
})
*/

app.get("/api/products/home",function(req,res)
{
    res.send(data.products);
});

app.get("/api/products/men",function(req,res)
{
    const product = data.products.filter(x => x.gender === 'Men');
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
    const product = data.products.filter(x => x.gender === 'Women');
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
    const product = data.products.filter(x => x.gender === 'Kids');
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
    const product = data.products.filter(x => x.type === 'shoes');
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
    const product = data.products.find(x => x.slug === req.params.slug);
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
    const gender = data.products.filter(x => x.gender === req.params.query );
    const name = data.products.filter(x => x.name === req.params.query );
    const brand = data.products.filter(x => x.brand === req.params.query );

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