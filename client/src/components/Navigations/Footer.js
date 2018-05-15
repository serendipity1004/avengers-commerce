import React from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';

import {FooterStyle} from '../../styles';

class Footer extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <Grid container>
                        <Grid item lg={4}>
                            <Typography variant="title" className={classNames(classes.white, classes.mainTitle)}>
                                CONTACT INFO
                            </Typography>
                            <Typography variant="subheading" className={classNames(classes.white, classes.smallTitle)}>
                                ADDRESS:
                            </Typography>
                            <Typography variant="subheading" className={classNames(classes.white, classes.smallContent)}>
                                123 dildo place
                            </Typography>
                            <Typography variant="subheading" className={classNames(classes.white, classes.smallTitle)}>
                                Phone :
                            </Typography>
                            <Typography variant="subheading" className={classNames(classes.white, classes.smallContent)}>
                                +84 6969 696969
                            </Typography>
                            <Typography variant="subheading" className={classNames(classes.white, classes.smallTitle)}>
                                Email :
                            </Typography>
                            <Typography variant="subheading" className={classNames(classes.white, classes.smallContent)}>
                                gmail@gmail.com
                            </Typography>
                        </Grid>
                        <Grid item lg={4}>
                            <Typography variant="subheading" className={classNames(classes.white, classes.smallTitle)}>
                                (C) All Rights Reserved Mother Fuckers
                            </Typography>
                        </Grid>
                        <Grid item lg={4}>
                            <Typography variant="title" className={classNames(classes.white, classes.mainTitle)}>
                                CONTACT INFO
                            </Typography>
                            <Typography variant="subheading" className={classNames(classes.white, classes.smallTitle)}>
                                ADDRESS:
                            </Typography>
                            <Typography variant="subheading" className={classNames(classes.white, classes.smallContent)}>
                                123 dildo place
                            </Typography>
                            <Typography variant="subheading" className={classNames(classes.white, classes.smallTitle)}>
                                Phone :
                            </Typography>
                            <Typography variant="subheading" className={classNames(classes.white, classes.smallContent)}>
                                +84 6969 696969
                            </Typography>
                            <Typography variant="subheading" className={classNames(classes.white, classes.smallTitle)}>
                                Email :
                            </Typography>
                            <Typography variant="subheading" className={classNames(classes.white, classes.smallContent)}>
                                gmail@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(FooterStyle)(Footer);
