import React from 'react';
import {withStyles} from 'material-ui/styles';
import {ProgressCarousel} from '../../components';
import {TopNav, NavBar} from '../../components';

const styles = theme => ({
    root: {}
});

class Root extends React.Component {
    render() {
        return (
            <div>
                <TopNav/>
                <NavBar/>
            </div>
        )
    }
}

export default withStyles(styles)(Root);