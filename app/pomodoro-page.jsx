import React from 'react'

import Tomato from './pomodoro';

import RaisedButton from 'material-ui/RaisedButton';


export default class TomatoBox extends React.Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
      time: this.getMaxTime(),
      msg: "Are you ready?"
    }
  }

  getMaxTime() {
    return (14 * 60 * 1000) + (24 * 1000);
  }

  handleStart() {
    this.setState({
      isPlaying: !this.state.isPlaying,
    });
  }

  handleReset() {
    this.setState({
      time: this.getMaxTime(),
      isPlaying: false,
      msg: "Are you ready?"
    });
  }

  startTimer() {
    return window.setInterval(() => {
      if (this.state.time > 0) {
        this.setState({
          time: this.state.time-1000,
          msg: "Let's dance!"
        });
      } else {
        this.timeOver();
      }
    }, 1000);
  }

  timeOver() {
    this.setState({
      isPlaying: false,
      msg: "Well Done!"
    });
  }

  componentDidUpdate() {
    if (this.state.isPlaying) {
      if (this.state.time == 0)
        this.timeOver();
      if (!this.timer)
        this.timer = this.startTimer();
    } else {
      window.clearInterval(this.timer);
      this.timer = null;
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
