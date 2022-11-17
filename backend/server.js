import express from 'express'
import data from './data.js'

const app = express();

app.get("/api/products",function(req,res)
{
    res.send(data.products);
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

const port =  process.env.PORT || 5000;
app.listen(port,function()
{
    console.log(`serve at http://localhost:${port}`);
});