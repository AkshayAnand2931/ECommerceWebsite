const data = {
    products:[
            {
                name:"Shirt",
                brand:"Nike",
                slug:'nike-shirt',
                type:'clothes',
                gender:'Men',
                description:'A Nike shirt is an athletic shirt that is typically made of cotton, nylon, or polyester, and is used to provide warmth and moisture control.',
                price:999,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"T-Shirt",
                brand:"Adidas",
                slug:'adidas-t-shirt',
                gender:'Women',
                type:'clothes',
                description:'Adidas t-shirts are a must-have for any wardrobe. The t-shirts are made of 100% cotton, and are both durable and comfortable. They come in a variety of colors and sizes, and the t-shirts are great for wearing with jeans or sweats',
                price:1450,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Jersey",
                brand:"Nike",
                slug:'nike-jersey',
                gender:'Men',
                type:'clothes',
                description:'The Nike jersey is made from a light and durable fabric that helps keep you dry and comfortable.',
                price:1250,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Shoes",
                brand:"Nike",
                slug:'nike-shoes',
                type:'shoes',
                gender:'Women',
                description:'Nike Air Jordan 11, AO1, White/Cement Grey-Black-Varsity Royal (614986-500), Women Running Shoe, Basketball Sneaker',
                price:8550,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Jeans",
                brand:"Levi",
                slug:'levi-jeans',
                gender:'Men',
                type:'clothes',
                description:'Comfortable LEVI Jeans, Denim jeans',
                price:850,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Polo shirt",
                brand:"US Polo",
                slug:'us-polo-shirt',
                type:'clothes',
                gender:'Men',
                description:'US Polo t-shirt,best quality pure 10% cotton',
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Frock",
                brand:"Daisy",
                slug:'a',
                gender:'Women',
                type:'clothes',
                description:'Adidas t-shirts are a must-have for any wardrobe. The t-shirts are made of 100% cotton, and are both durable and comfortable. They come in a variety of colors and sizes, and the t-shirts are great for wearing with jeans or sweats',
                price:1450,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Jersey",
                brand:"Nike",
                slug:'nike-jersey',
                gender:'Men',
                type:'clothes',
                description:'The Nike jersey is made from a light and durable fabric that helps keep you dry and comfortable.',
                price:1250,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Shoes",
                brand:"Nike",
                slug:'nike-shoes',
                type:'shoes',
                gender:'Women',
                description:'Nike Air Jordan 11, AO1, White/Cement Grey-Black-Varsity Royal (614986-500), Women Running Shoe, Basketball Sneaker',
                price:8550,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Jeans",
                brand:"Levi",
                slug:'levi-jeans',
                gender:'Men',
                type:'clothes',
                description:'Comfortable LEVI Jeans, Denim jeans',
                price:750,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Sandals",
                brand:"Crocs",
                slug:'crocs-sandals',
                type:'shoes',
                gender:'Kids',
                description:'Made of high quality rubber. 100% natural rubbers.  ',
                price:550,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Shorts",
                brand:"Adidas",
                slug:'adidas-shorts',
                gender:'Men',
                type:'clothes',
                description:'Adidas shorts, premium quality use by proffesional athletes',
                price:1150,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Jersey",
                brand:"Nike",
                slug:'nike-jersey',
                gender:'Men',
                type:'clothes',
                description:'The Nike jersey is made from a light and durable fabric that helps keep you dry and comfortable.',
                price:1250,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Air Jordans",
                brand:"Jordans",
                slug:'air-jordan-shoes',
                type:'shoes',
                gender:'Men',
                description:'Nike Air Jordan 11, AO1, White/Sky Blue white (614986-500), Men Shoe, Basketball Sneaker',
                price:9550,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Hoodie",
                brand:"Nike",
                slug:'nike-hoodie',
                gender:'Men',
                type:'clothes',
                description:'Comfortable sporty hoodies',
                price:2250,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Socks",
                brand:"decathlon",
                slug:'socks-decathlon',
                type:'clothes',
                gender:'Men',
                description:'High quality 100% pure cotton decathlon socks',
                price:899,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Socks",
                brand:"decathlon",
                slug:'socks-decathlon',
                type:'clothes',
                gender:'Women',
                description:'High quality 100% pure cotton decathlon socks',
                price:899,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Socks",
                brand:"decathlon",
                slug:'socks-decathlon',
                type:'clothes',
                gender:'Kids',
                description:'High quality 100% pure cotton decathlon socks',
                price:899,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Polo ",
                brand:"Adidas",
                slug:'adidas-t-shirt',
                gender:'Women',
                type:'clothes',
                description:'Adidas t-shirts are a must-have for any wardrobe. The t-shirts are made of 100% cotton, and are both durable and comfortable. They come in a variety of colors and sizes, and the t-shirts are great for wearing with jeans or sweats',
                price:1450,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Jersey",
                brand:"Nike",
                slug:'nike-jersey',
                gender:'Men',
                type:'clothes',
                description:'The Nike jersey is made from a light and durable fabric that helps keep you dry and comfortable.',
                price:1250,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Shoes",
                brand:"Nike",
                slug:'nike-shoes',
                type:'shoes',
                gender:'Women',
                description:'Nike Air Jordan 11, AO1, White/Cement Grey-Black-Varsity Royal (614986-500), Women Running Shoe, Basketball Sneaker',
                price:8550,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Jeans",
                brand:"Levi",
                slug:'levi-jeans',
                gender:'Men',
                type:'clothes',
                description:'Comfortable LEVI Jeans, Denim jeans',
                price:450,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Shirt",
                brand:"Nike",
                slug:'nike-shirt',
                type:'clothes',
                gender:'Men',
                description:'A Nike shirt is an athletic shirt that is typically made of cotton, nylon, or polyester, and is used to provide warmth and moisture control.',
                price:999,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"T-Shirt",
                brand:"Adidas",
                slug:'adidas-t-shirt',
                gender:'Women',
                type:'clothes',
                description:'Adidas t-shirts are a must-have for any wardrobe. The t-shirts are made of 100% cotton, and are both durable and comfortable. They come in a variety of colors and sizes, and the t-shirts are great for wearing with jeans or sweats',
                price:1450,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Jersey",
                brand:"Nike",
                slug:'nike-jersey',
                gender:'Men',
                type:'clothes',
                description:'The Nike jersey is made from a light and durable fabric that helps keep you dry and comfortable.',
                price:1250,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Shoes",
                brand:"Nike",
                slug:'nike-shoes',
                type:'shoes',
                gender:'Women',
                description:'Nike Air Jordan 11, AO1, White/Cement Grey-Black-Varsity Royal (614986-500), Women Running Shoe, Basketball Sneaker',
                price:8550,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            },
            {
                name:"Jeans",
                brand:"Levi",
                slug:'levi-jeans',
                gender:'Men',
                type:'clothes',
                description:'Comfortable LEVI Jeans, Denim jeans',
                price:450,
                image:"https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/446935/item/phgoods_41_446935.jpg?width=1008&impolicy=quality_75"
            }

        ]
}
export default data;