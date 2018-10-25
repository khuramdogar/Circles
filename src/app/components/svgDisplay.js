import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styles';


const SvgDisplay = ({
    classes,
    circles,
}) => {
    return (
        <div className={classes.svgContainer}>
            <svg width="400px" height="400px">
                {
                    circles.map((circle) => {
                        return (
                            <circle
                                key={circle.id}
                                cx={circle.xaxis}
                                cy={circle.yaxis}
                                r={circle.radius}
                                fill={circle.color}
                            />
                        );
                    })
                }
            </svg>
        </div>
    )
}

SvgDisplay.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgDisplay);