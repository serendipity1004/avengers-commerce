import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../services/history';
import {ResponsiveDrawer} from '../components';
import {mainRoutes} from '../routes';
import Reboot from 'material-ui/Reboot';
import {TopNav, NavBar} from '../components';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import Footer from '../components/Navigations/Footer';
import Drawer from 'material-ui/Drawer';
import {connect} from 'react-redux';
import {
    toggleDrawer,
    getAllProducts,
    closeSnackbar
} from '../actions/frontInteraction';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {
    Basket,
    PaymentModal
} from '../containers';
import Snackbar from 'material-ui/Snackbar';
import Button from 'material-ui/Button';

const theme = createMuiTheme({
    palette: {
        secondary:
            {
                main: '#DE181E',
                light: '#FD7276'
            }
    }
});

/**
 * Pages
 * */

const mainSwitch = (
    <Switch>
        {mainRoutes.map(function (item, index) {
            return (
                item.wrapper ? 'Something else' : <Route key={index} path={item.path} component={item.component}/>
            )
        })}
    </Switch>
);

class App extends React.Component {
    state = {};

    constructor(props) {
        super(props);

        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    componentWillMount(){
        this.props.getAllProducts();
    }

    toggleDrawer = open => event => {
        this.props.toggleDrawer(open);
    };

    handleSnackbarClose(){
        this.props.closeSnackbar();
    }

    render() {
        const {classes, basket, openSnackbar, snackbarMsg, modalOpen} = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <Reboot/>
                    <Router history={history}>
                        <div>
                            <TopNav/>
                            <NavBar
                                numberOfItems={!basket ? 0 : Object.keys(basket).length}
                            />
                            {mainSwitch}
                            <Footer/>
                            <Drawer anchor="right" open={this.props.drawerOpen} onClose={this.toggleDrawer(false)}>
                                <Basket/>
                            </Drawer>
                            <Snackbar
                                anchorOrigin={{vertical:'top', horizontal:'center'}}
                                open={openSnackbar}
                                onClose={this.handleSnackbarClose}
                                message={snackbarMsg}
                                autoHideDuration={2000}
                                action={
                                    <Button color="secondary" size="small" onClick={this.handleSnackbarClose}>
                                        Close
                                    </Button>
                                }
                            />
                            <PaymentModal/>
                        </div>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        drawerOpen: state.front.drawerOpen,
        basket:state.user.basket,
        openSnackbar:state.front.openSnackbar,
        snackbarMsg:state.front.snackbarMsg
    }
}

export default connect(mapStateToProps,
    {
        toggleDrawer,
        getAllProducts,
        closeSnackbar
    })
(App);