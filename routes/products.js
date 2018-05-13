const Product = require('../models/products');

module.exports = app => {

    app.get('/api/products', async (req, res)=>{
        try{
            /**
             * Get name queries separated by comma - if falsy, return all
             * */

            let queries = req.query.names;

            if (!queries) {
                let products = await Product.find({}).exec();

                return res.json({success: true, data: {products}});
            }

            let splitQueries = queries.split(',');

            let products = await Product.find({name: {$in: splitQueries}}).exec();

            res.json({success: true, data: {products}});

        }catch(e){
            res.json({success: false});
        }
    })
};