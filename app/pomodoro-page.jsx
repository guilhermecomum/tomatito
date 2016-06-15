import React from 'react'

let Tomato = require('./pomodoro');

export class TomatoBox extends React.Component {
  getInitialState() {
    return {
      isPlaying: false,
      time: (14 * 60 * 1000) + (24 * 1000),
      msg: "Time to work!"
    };
  }

  zfill(number, size) {
    number = number.toString();
    while (number.length < size) number = "0" + number;
    return number;
  }

  handleStart() {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
    console.log("Clicked! " + this.state.isPlaying);
  }

  handleReset() {
    this.setState({
      time: (14 * 60 * 1000) + (24 * 1000),
      isPlaying: false,
      msg: "Time to work!"
    });
  }

  startTimer() {
    return window.setInterval(() => {
      if (this.state.time > 0) {
        this.setState({
          time: this.state.time-1000
        });
      }
    }, 1000);
  }

  timeOver() {
    this.setState({
      time: this.getMaxTime(!this.state.isBreak),
    });
  }

  componentDidUpdate() {
    if (this.state.isPlaying) {
      if (!this.timer)
        this.timer = this.startTimer();
    } else {
      window.clearInterval(this.timer);
      this.timer = null;
    }
    if (this.state.time == 0 ) {
      this.setState({
        msg: "Well done!",
      });
    }
  }

  render() {
    return (
      <div className="TomatoBox">
        <div id="osd">
          <p>{this.state.msg}</p>
        </div>
        <Tomato time={this.state.time} />
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleReset}>Stop</button>
      </div>
    );
  }
}

module.exports = TomatoBox;
