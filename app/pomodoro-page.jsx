import React from 'react'

import Tomato from './pomodoro';

import RaisedButton from 'material-ui/RaisedButton';


export default class TomatoBox extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
      time: (14 * 60 * 1000) + (24 * 1000),
      msg: "Are you ready?"
    }
  }

  handleStart() {
    this.setState({
      isPlaying: !this.state.isPlaying,
      msg: "Let's dance!"
    });
    console.log("Clicked! " + this.state.isPlaying);
  }

  handleReset() {
    this.setState({
      time: (14 * 60 * 1000) + (24 * 1000),
      isPlaying: false,
      msg: "Are you ready?"
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
          {this.state.msg}
        </div>
        <Tomato time={this.state.time} />
        <RaisedButton label="Start" primary={true} onClick={this.handleStart.bind(this)} />
        <RaisedButton label="Reset" onClick={this.handleReset.bind(this)} />
      </div>
    );
  }
}
