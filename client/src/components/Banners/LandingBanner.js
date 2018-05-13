import React from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import {LandingBannerStyle} from '../../styles';

class LandingBanner extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paperRoot}>
                    <Grid container direction="column" justify="flex-end" className={classes.titleContainer}>
                        <Grid item>
                            <Typography variant="display1" className={classes.title}>
                                Captain America
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="raised" className={classes.titleBtn}>
                                Hire this guy
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}

export default withStyles(LandingBannerStyle)(LandingBanner);