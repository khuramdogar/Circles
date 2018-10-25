import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { SketchPicker } from 'react-color';
import styles from '../styles/styles';


const SvgColorPicker = ({
    classes,
    circles,
    selectivecircle,
    handleColor,
    handlePickerClose
}) => {
    return (
        <div className={classes.pickerContainer}>
            <div className={classes.closeColorPicker} onClick={handlePickerClose} />
            <SketchPicker
                color={selectivecircle.color}
                onChange={handleColor}
            />
        </div>
    )
}

SvgColorPicker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgColorPicker);