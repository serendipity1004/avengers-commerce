import React from 'react';
import {withStyles} from 'material-ui/styles';
import {
    DeliveryBanner,
    LandingSidebar,
    LandingBanner,
    ProductCard
} from '../../components';
import axios from 'axios';
import Grid from 'material-ui/Grid';
import Footer from '../../components/Navigations/Footer';
import {addToBasket} from '../../actions/userInteraction';
import {
    closeSnackbar,
    openSnackbar
} from '../../actions/frontInteraction';
import {connect} from 'react-redux';
import CONFIG from '../../config';

import {LandingPageStyle} from '../../styles';

class LandingPage extends React.Component {
    state = {};

    constructor(props) {
        super(props);

        this.getProducts = this.getProducts.bind(this);
        this.pageLoad = this.pageLoad.bind(this);
        this.hireClicked = this.hireClicked.bind(this);
    }

    componentWillMount() {
        this.pageLoad();
    }

    hireClicked = name => async e => {
        await this.props.addToBasket({[name]: 1});
        this.props.openSnackbar(`1 ${name} added to basket`);
    };

    async pageLoad() {
        this.getProducts();
    }

    async getProducts() {
        this.setState({gettingProducts: true});

        let response = await axios.get('/api/products');

        let {success, data} = response.data;

        console.log(data);

        if (!success) {
            return this.setState({gettingProductsE: true})
        }

        this.setState({products: data.products, gettingProducts: false})
    }

    render() {
        const {classes} = this.props;
        const {gettingProducts, products} = this.state;

        return (
            <div className={classes.root}>
                <DeliveryBanner/>
                <div className={classes.container}>
                    <Grid container>
                        <Grid item lg={4}>
                            <LandingSidebar/>
                        </Grid>
                        <Grid item lg={8}>
                            <LandingBanner/>
                        </Grid>
                    </Grid>
                    <Grid container justify="space-around" style={{minHeight: 900}}>
                        {
                            gettingProducts ?
                                'Loading...' :
                                products.map((item, index) => {
                                    return (
                                        <Grid item lg={3} key={index}>
                                            <ProductCard
                                                img={`http://${CONFIG.server.ip}:${CONFIG.server.port}/img/products/${item.image}.jpeg`}
                                                title={item.name}
                                                content={'$ ' + item.price}
                                                target={`/product/${item}`}
                                                hireClick={this.hireClicked(item.name)}
                                            />
                                        </Grid>
                                    );
                                })
                        }
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(LandingPageStyle)(connect(null,
    {
        addToBasket,
        openSnackbar,
        closeSnackbar
    })
(LandingPage));