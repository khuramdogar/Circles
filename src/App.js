import React, { Component } from 'react';
import './App.css';
import { SketchPicker } from 'react-color'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      selectivecircle: {
        id: 0,
        xaxis: "100",
        yaxis: "110",
        radius: "7",
        color: "white"
      },
      positions: [
        {
          id: 0,
          name: "Head",
          xaxis: "100",
          yaxis: "100",
          radius: "50",
          color: "red"
        },
        {
          id: 1,
          xaxis: "80",
          yaxis: "90",
          name: "LeftEye",
          radius: "8",
          color: "white"
        },
        {
          id: 2,
          xaxis: "80",
          name: "LeftEyeBall",
          yaxis: "90",
          radius: "3",
          color: "blue"
        },
        {
          id: 3,
          xaxis: "120",
          name: "RightEye",
          yaxis: "90",
          radius: "8",
          color: "white"
        },
        {
          id: 4,
          xaxis: "120",
          name: "RightEyeBall",
          yaxis: "90",
          radius: "3",
          color: "blue"
        },
        {
          id: 5,
          xaxis: "100",
          yaxis: "110",
          name: "Nose",
          radius: "7",
          color: "white"
        }
      ]
    }

  }

  getDate = (e) => {
    console.log(e.target.name);
    let { positions, selectivecircle } = this.state;
    positions[selectivecircle.id][e.target.name] = (e.target.value);
    this.setState({
      positions,
      selectivecircle: positions[selectivecircle.id]
    })
  }

  handleColor = (color, e) => {
    let { positions, selectivecircle } = this.state;
    positions[selectivecircle.id].color = color.hex;
    this.setState({
      positions,
    })
  }

  setSelectiveCircle = (e) => {
    this.setState({
      selectivecircle: this.state.positions[e.target.value]
    })
  }



  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {
    return (
      <div>
        <div className="App">
          <div>
            <label>
              X-axis
              <input type="number" name="xaxis" onChange={this.getDate} value={this.state.selectivecircle.xaxis}  />
            </label>
            <br />
            <label>
              Y-axis
              <input type="number" name="yaxis" onChange={this.getDate} value={this.state.selectivecircle.yaxis}  />
            </label>
            <br/>
            <select onChange={this.setSelectiveCircle}>
              { this.state.positions.map( p => (
                <option value={p.id} key={p.id}>{p.name}</option>  
              ))}
            </select>
            <br/>
            <div>
              <div>
                <button onClick={ this.handleClick }> Open Color Picker</button>
                <br/>
                <div/>
              </div>
                {this.state.displayColorPicker ? <div>
                <button onClick={ this.handleClose }> Close</button>
                <br/>
                <SketchPicker color={ this.state.color } onChange={ this.handleColor } />
              </div> : null }
            </div>
          </div>
          <svg>
            {
              this.state.positions.map((circle) => {
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
      </div>
    );
  }
}

export default App;
