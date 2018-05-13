import React from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import DownIcon from 'material-ui-icons/KeyboardArrowDown';
import classNames from 'classnames';
import AnnouncementsIcon from 'material-ui-icons/Accessibility';
import MyAccountIcon from 'material-ui-icons/AccountCircle';
import FaceIcon from 'material-ui-icons/Face';
import VpnKeyIcon from 'material-ui-icons/VpnKey';

import {TopNavStyle} from '../../styles';

class TopNav extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.container} justify="space-around">
                    <Grid item lg={6}>
                        <Grid container className={classes.eachHalf}>
                            <Typography variant="subheading" className={classes.titles}>
                                ENG <DownIcon className={classes.alignCenter}/>
                            </Typography>
                            <div className={classes.vertBar}>
                            </div>
                            <Typography variant="subheading" className={classes.titles}>
                                USD <DownIcon className={classes.alignCenter}/>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <Grid container className={classes.eachHalf} justify="flex-end">
                            <Typography variant="subheading" className={classes.titles} align="right">
                                <AnnouncementsIcon className={classes.alignCenter}/> Announcements
                            </Typography>
                            <div className={classes.vertBar}>
                            </div>
                            <Typography variant="subheading" className={classes.titles} align="right">
                                <MyAccountIcon className={classes.alignCenter}/> My Account
                            </Typography>
                            <div className={classes.vertBar}>
                            </div>
                            <Typography variant="subheading" className={classes.titles} align="right">
                                <FaceIcon className={classes.alignCenter}/> About Us
                            </Typography>
                            <div className={classes.vertBar}>
                            </div>
                            <Typography variant="subheading" className={classes.titles} align="right">
                                <VpnKeyIcon className={classes.alignCenter}/> Log In
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(TopNavStyle)(TopNav);