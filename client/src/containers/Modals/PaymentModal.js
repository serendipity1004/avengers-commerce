import React from 'react';
import {withStyles} from 'material-ui/styles';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import {FormControl} from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import {
    openModal,
    closeModal,
    closeSnackbar,
    toggleDrawer
} from '../../actions/frontInteraction';
import {connect} from 'react-redux';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import DoneIcon from 'material-ui-icons/Done';

import {PaymentModalStyle} from '../../styles';

class PaymentModal extends React.Component {
    state = {
        firstInput: '',
        secondInput: '',
        thirdInput: '',
        fourthInput: '',
        paymentDone: false
    };

    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.paymentClick = this.paymentClick.bind(this);
    }

    handleClose() {
        this.props.closeModal();
        this.setState({paymentDone: false});
    }

    handleChange = target => e => {
        if (e.target.value.length > 4) {
            return;
        }

        this.setState({[target]: e.target.value});
    };

    paymentClick() {
        this.setState({paymentDone: true});
    }

    render() {
        const {classes, openModalProp, basket, products} = this.props;
        const {paymentDone} = this.state;

        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={openModalProp}
                onClose={this.handleClose}
            >
                <div className={classes.modalDiv}>
                    {paymentDone ?
                        <div>
                            <Grid container justify="center">
                                <Grid item lg={12}>
                                    <Grid container justify="center">
                                        <Typography variant="title" id="modal-title" align="center" className={classes.title}>
                                            Payment Done
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item lg={12}>
                                    <Grid container justify="center">
                                        <DoneIcon className={classes.doneIcon}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div> :
                        <div>
                            <Grid container justify="center">
                                <Grid item lg={12}>
                                    <Grid container justify="center">
                                        <Typography variant="title" id="modal-title" align="center" className={classes.title}>
                                            Current Payable
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justify="center">
                                <Grid item lg={12}>
                                    <Grid container justify="center">
                                        <Typography variant="title" id="modal-title" align="center">
                                            $ {!basket || !products || products.length < 1 ? 0 :
                                            Object.keys(basket).reduce((accumulator, curValue) => {
                                                return accumulator += (basket[curValue] * products.find((product) => {
                                                    return product.name === curValue;
                                                }).price);
                                            }, 0)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justify="center">
                                <Grid item lg={12}>
                                    <Grid container justify="center" className={classes.topPadding}>
                                        <Grid item lg={12}>
                                            <Typography variant="title" id="modal-title" className={classes.titleNoBottm}>
                                                Enter Your Credit Card Credentials
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container justify="center">
                                <TextField
                                    className={classes.textField}
                                    value={this.state.firstInput}
                                    onChange={this.handleChange('firstInput')}
                                    margin="normal"
                                    type="number"
                                />
                                <TextField
                                    className={classes.textField}
                                    value={this.state.secondInput}
                                    onChange={this.handleChange('secondInput')}
                                    margin="normal"
                                    type="number"
                                />
                                <TextField
                                    className={classes.textField}
                                    value={this.state.thirdInput}
                                    onChange={this.handleChange('thirdInput')}
                                    margin="normal"
                                    type="number"
                                />
                                <TextField
                                    className={classes.textField}
                                    value={this.state.fourthInput}
                                    onChange={this.handleChange('fourthInput')}
                                    margin="normal"
                                    type="number"
                                />
                            </Grid>
                            <Grid container justify="center">
                                <Button variant="raised" className={classes.payBtn} onClick={this.paymentClick}>
                                    Pay Now
                                </Button>
                            </Grid>
                        </div>
                    }

                </div>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {
        openModalProp: state.front.openModal,
        basket: state.user.basket,
        products: state.front.products
    }
}

export default withStyles(PaymentModalStyle)(connect(mapStateToProps, {
    openModal,
    closeModal,
    toggleDrawer
})(PaymentModal));