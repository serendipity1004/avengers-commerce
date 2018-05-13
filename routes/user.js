const Products = require('../models/products');

module.exports = app => {

    app.get('/api/user/basket', async (req, res) => {
        try {
            let basket = req.session.basket;

            res.json({success: true, data: {basket}});
        } catch (e) {
            res.json({success: false});
        }
    });

    app.post('/api/user/basket', async (req, res) => {
        try {
            let basket = req.session.basket;

            if (!basket) {
                basket = {};
            }

            /**
             * req.body.names contain object of name key + value number of additions/subtractions
             * */

            let newAdditions = req.body.names;
            let newAdditionsKeys = Object.keys(newAdditions);

            let basketKeys = Object.keys(basket);

            for (let i = 0; i < newAdditionsKeys.length; i++) {
                let curKey = newAdditionsKeys[i];

                /**
                 * Initialize if doesn't exist
                 * */
                if (!basket[curKey]) {
                    basket[curKey] = 0;
                }

                basket[curKey] = basket[curKey] += parseInt(newAdditions[curKey]);
            }

            req.session.basket = basket;

            res.json({success: true, data: {basket}});

        } catch (e) {
            res.json({success: false});
        }
    });

    app.delete('/api/user/basket', async (req, res) => {
        try {
            let basket = req.session.basket;

            let {names} = req.query;

            if (Array.isArray(names) && names.length > 0) {
                for (let i = 0; i < names.length; i++) {
                    let curName = names[i];

                    try {
                        delete basket[curName]
                    } catch (e) {

                    }
                }

                req.session.basket = basket;
            } else {
                req.session.basket = {};
            }

            res.json({success: true, data: {basket: req.session.basket}});

        } catch (e) {
            res.json({success: false});
        }
    });
};