import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SvgForm from '../components/svgForm';
import SvgDisplay from '../components/svgDisplay';
import SvgColorPicker from '../components/SvgColorPicker';
import styles from '../styles/styles';
import { circles } from '../../data/circles';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      circles,
    }
  }

  componentWillMount() {
    this.setState({
      selectivecircle: circles[0]
    })
  }


  setAxis = (e) => {
    let { circles, selectivecircle } = this.state;
    circles[selectivecircle.id][e.target.id] = (e.target.value);
    this.setState({
      circles,
      selectivecircle: circles[selectivecircle.id]
    })
  }

  handleColor = (color, e) => {
    let { circles, selectivecircle } = this.state;
    circles[selectivecircle.id].color = color.hex;
    this.setState({
      circles,
    })
  }

  setSelectiveCircle = (e) => {
    this.setState({
      selectivecircle: this.state.circles[e.target.value]
    })
  }

  handleColorChange = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handlePickerClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {
    const { classes } = this.props;
    const { circles, selectivecircle, displayColorPicker } = this.state;
    return (
      <div>
        <SvgForm
          classes={classes}
          selectivecircle={selectivecircle}
          circles={circles}
          setAxis={this.setAxis}
          handleColorChange={this.handleColorChange}
          setSelectiveCircle={this.setSelectiveCircle}
        />
        <SvgDisplay circles={circles} classes={classes} />
        {displayColorPicker &&
          <SvgColorPicker
            circles={circles}
            classes={classes}
            handlePickerClose={this.handlePickerClose}
            selectivecircle={selectivecircle}
            handleColor={this.handleColor}
          />}
      </div>
    );
  }
}

export default withStyles(styles)(App);