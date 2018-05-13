const Product = require('../models/products');

async function fillProducts() {
    let productsBatch =
        [
            'Captain America',
            'Thor',
            'Iron Man',
            'Hulk',
            'Dr. Strange',
            'Vision',
            'Groot',
            'War Machine',
            'Bucky',
            'Mantis',
        ];

    for(let i = 0; i < productsBatch.length; i++){
        let product = new Product({
            price: Math.floor(Math.random() * 100),
            name: productsBatch[i],
            image:productsBatch[i].split(' ').join('')
        });

        await product.save();
    }
}

module.exports = {
    fillProducts
};