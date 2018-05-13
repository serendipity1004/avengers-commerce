import React from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import CONFIG from '../../config';

import {BasketProductStyle} from '../../styles';

class BasketProduct extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item lg={4}>
                        <img src={`http://${CONFIG.server.ip}:${CONFIG.server.port}/img/products/${this.props.img}.jpeg`} className={classes.thumbnail}/>
                    </Grid>
                    <Grid item lg={8}>
                        <Grid container justify="space-between" className={classes.titleGrid}>
                            <Typography variant="subheading">
                                {this.props.name}
                            </Typography>
                            <IconButton className={classes.iconBtn} onClick={this.props.removeClick}>
                                <DeleteIcon/>
                            </IconButton>
                        </Grid>
                        <Grid container>
                            <Typography variant="caption">
                                {this.props.quantity} x <span className={classes.bold}>{this.props.price}</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(BasketProductStyle)(BasketProduct);