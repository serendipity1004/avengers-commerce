import React from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui-icons/Search';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import Badge from 'material-ui/Badge';
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart';
import {toggleDrawer} from '../../actions/frontInteraction';
import {connect} from 'react-redux';

import {NavbarStyle} from '../../styles';

class Navbar extends React.Component {
    state = {};

    constructor(props){
        super(props);

        this.openDrawer = this.openDrawer.bind(this);
    }

    handleChange = target => event => {
        this.setState({[target]: event.target.value});
    };

    handleSearchClick() {

    };

    openDrawer(e){
        this.props.toggleDrawer(true);
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.container}>
                    <Grid item lg={4}>
                        <Grid container alignItems="center" className={classes.inlineBlock}>
                            <img src={require('../../resources/img/marvel-studio.png')} className={classes.logo}/>
                        </Grid>
                    </Grid>
                    <Grid item lg={4}>
                        <div className={classes.searchContainer}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="adornment-password">Search</InputLabel>
                                <Input
                                    id="search-input"
                                    type="text"
                                    value={this.state['search-term']}
                                    onChange={this.handleChange('search-term')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Search"
                                                onClick={this.handleSearchClick}
                                            >
                                                <SearchIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid item lg={4}>
                        <Grid container justify="flex-end">
                            <div>
                                <Typography variant="headline" className={classes.white}>
                                    Call us now
                                </Typography>
                                <Typography variant="subheading" className={classes.white}>
                                    +82 10 8333 2342
                                </Typography>
                            </div>
                            <div className={classes.vertBar}/>
                            <div className={classes.shoppingCartContainer}>
                                <IconButton className={classes.shoppingCartBtn} onClick={this.openDrawer}>
                                    <Badge badgeContent={this.props.numberOfItems} color="primary">
                                        <ShoppingCartIcon className={classes.shoppingCart}/>
                                    </Badge>
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        drawerOpen: state.front.drawerOpen
    }
}

export default withStyles(NavbarStyle)(
    connect(mapStateToProps, {
        toggleDrawer,
    })
(Navbar));