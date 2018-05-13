import React from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router-dom';
import StoreIcon from 'material-ui-icons/StoreMallDirectory';
import HomeIcon from 'material-ui-icons/Home';
import AnnouncementIcon from 'material-ui-icons/Announcement';
import BlogIcon from 'material-ui-icons/ChromeReaderMode';
import UsIcon from 'material-ui-icons/Accessibility';
import PhoneIcon from 'material-ui-icons/Call';
import MoneyIcon from 'material-ui-icons/MonetizationOn';

import {LandingSidebarStyle} from '../../styles';

class LandingSidebar extends React.Component {
    render() {
        const {classes} = this.props;

        const LINKS =
            [
                {
                    path: '/',
                    text: 'Home',
                    icon: <HomeIcon className={classes.icon}/>
                },
                {
                    path: '/announcements',
                    text: 'Announcements',
                    icon: <AnnouncementIcon className={classes.icon}/>
                },
                {
                    path: '/blogs',
                    text: 'Blogs',
                    icon: <BlogIcon className={classes.icon}/>
                },
                {
                    path: '/about-us',
                    text: 'About Us',
                    icon: <UsIcon className={classes.icon}/>
                },
                {
                    path: '/contact-us',
                    text: 'Contact Us',
                    icon: <PhoneIcon className={classes.icon}/>
                },
                {
                    path: '/pay-me-btc',
                    text: 'Pay me BTC',
                    icon: <MoneyIcon className={classes.icon}/>
                }
            ];

        return (
            <div className={classes.root}>
                <Paper>
                    <Typography variant="title" className={classes.navTitle}>
                        Home
                    </Typography>
                    {LINKS.map(function (item, index) {
                        return (
                            <div>
                                <Divider className={classes.divider}/>
                                <Typography component={Link} to={item.path} variant="subheading"
                                            className={classes.navLinks}>
                                    {item.icon} {item.text}
                                </Typography>
                            </div>
                        );
                    })}
                </Paper>
            </div>
        )
    }
}

export default withStyles(LandingSidebarStyle)(LandingSidebar);