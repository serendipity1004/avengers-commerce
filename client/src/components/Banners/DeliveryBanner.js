import React from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import DeliveryIcon from 'material-ui-icons/FlightTakeoff';
import Typography from 'material-ui/Typography';
import DollarIcon from 'material-ui-icons/AttachMoney';
import PhoneIcon from 'material-ui-icons/Phone';

import {DeliveryBannerStyle} from '../../styles';

class DeliveryBanner extends React.Component {
    render() {
        const {classes} = this.props;

        const BANNER_CONTENT =
            [
                {
                    title:'FREE SHIPPING & RETURN',
                    content:'Free shipping on all orders over $99',
                    icon:<DeliveryIcon className={classes.deliveryIcon}/>
                },
                {
                    title:'MONEY BACK GUARANTEE',
                    content:'100% money back guarantee',
                    icon:<DollarIcon className={classes.deliveryIcon}/>
                },
                {
                    title:'ONLINE SUPPORT 24/7',
                    content:'Lorem ipsum dolor sit amet.',
                    icon:<PhoneIcon className={classes.deliveryIcon}/>
                }
            ];

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <Grid container justify="center" className={classes.fullHeight}>
                        {BANNER_CONTENT.map(function (item, index) {
                            return (
                                <Grid item xs={4} key={index}>
                                    <Grid container justify="center">
                                        <Grid item lg={2}>
                                            {item.icon}
                                        </Grid>
                                        <Grid item lg={10}>
                                            <div className={classes.vertCenter}>
                                                <Typography variant="title" className={classes.title}>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="subheading" className={classes.subheading}>
                                                    {item.content}
                                                </Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(DeliveryBannerStyle)(DeliveryBanner);