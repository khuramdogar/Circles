import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from '../styles/styles';


const SvgForm = ({
    classes,
    selectivecircle,
    setAxis,
    setSelectiveCircle,
    circles,
    handleColorChange
}) => {
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="xaxis"
                label={`Move ${selectivecircle.name} to Horizontal`}
                className={classes.textField}
                value={selectivecircle.xaxis}
                onChange={setAxis}
                margin="normal"
                type='number'
            />
            <TextField
                id="yaxis"
                label={`Move ${selectivecircle.name} to Vertical`}
                className={classes.textField}
                value={selectivecircle.yaxis}
                onChange={setAxis}
                margin="normal"
                type='number'
            />
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-helper">Pick Circle</InputLabel>
                <Select
                    value={selectivecircle.id}
                    onChange={setSelectiveCircle}
                >
                    {circles.map(p => (
                        <MenuItem value={p.id} key={p.id}>{p.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button variant="outlined" color="primary" onClick={handleColorChange} className={classes.button}>
                Change {selectivecircle.name} Color
          </Button>
        </form>
    )
}

SvgForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgForm);