import React from 'react';
import {withStyles} from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
import CONFIG from '../../config';

import {ProductCardStyle} from '../../styles';

class ProductCard extends React.Component {
    state = {};

    constructor(props){
        super(props);
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={this.props.img}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography component="p">
                            {this.props.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="secondary" onClick={this.props.hireClick}>
                            Hire Now
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default withStyles(ProductCardStyle)(ProductCard);