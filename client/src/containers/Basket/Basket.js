import React from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import {BasketProductCard} from '../../components';
import Button from 'material-ui/Button';
import {
    getBasket,
    removeFromBasket
} from '../../actions/userInteraction';
import {
    getAllProducts,
    openSnackbar,
    openModal,
    toggleDrawer
} from '../../actions/frontInteraction';
import {connect} from 'react-redux';

import {BasketStyle} from '../../styles';

class Basket extends React.Component {
    state = {};

    constructor(props) {
        super(props);

        this.removeBasket = this.removeBasket.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    componentWillMount(){
        this.props.getAllProducts();
        this.props.getBasket();
    }

    removeBasketProduct = name => e => {
        this.props.removeFromBasket([name]);
        this.props.openSnackbar(`${name} removed from basket!`);
    };

    async removeBasket(){
        await this.props.removeFromBasket();
        this.props.openSnackbar('All items removed from basket!');
    }

    openModal(){
        this.props.toggleDrawer();
        this.props.openModal();
    }

    render() {
        const {classes, basket = [], products} = this.props;

        return (
            <div className={classes.root}>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <Grid container>
                            <Typography variant="title" algin="center" className={classes.title}>
                                Basket
                            </Typography>
                        </Grid>
                    </Grid>
                    {!basket ?
                        <Grid item xs={12}>
                            <Typography variant="subheading">Loading...</Typography>
                        </Grid> :
                        basket.length < 1 ?
                            <Grid item xs={12}>
                                <Typography variant="subheading"> You have no Items</Typography>
                            </Grid> :
                        Object.keys(basket).map((item, index) => {
                            return (
                                <Grid item xs={12}>
                                    <BasketProductCard
                                        img={item.split(' ').join('')}
                                        name={item}
                                        quantity={basket[item]}
                                        price={!products ? 'loading...' : '$ ' + products.find((element) => {
                                            return element.name === item;
                                        }).price}
                                        removeClick={this.removeBasketProduct(item)}
                                    />
                                </Grid>
                            );
                        })}
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <Grid item xs={12}>
                                <Grid container>
                                    <Typography variant="title" align="center" className={classes.title}>
                                        Total : $ { !basket || !products || products.length < 1 ? 0 :
                                        Object.keys(basket).reduce((accumulator, curValue)=>{
                                        return accumulator += (basket[curValue] * products.find((product) => {
                                            return product.name === curValue;
                                        }).price);
                                    }, 0)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="raised" className={classes.button} onClick={this.openModal}>
                            Pay for Hire
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="raised" className={classes.button} onClick={this.removeBasket}>
                            Empty Basket
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        basket: state.user.basket,
        products: state.front.products,
    }
}

export default withStyles(BasketStyle)(connect(mapStateToProps,
    {
        getBasket,
        getAllProducts,
        removeFromBasket,
        openSnackbar,
        openModal,
        toggleDrawer
    })
(Basket));