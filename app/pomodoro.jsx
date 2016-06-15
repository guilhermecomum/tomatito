import React from 'react'

export default class Tomato extends React.Component {
  constructor() {
    super();
    this.state = {
      time: (14 * 60 * 1000) + (24 * 1000),
      msg: "Time to work!"
    };
  }

  zfill(number, size) {
    number = number.toString();
    while (number.length < size) number = "0" + number;
    return number;
  }

  getTime() {
    let ms = this.state.time,
        min = (ms/1000/60) << 0,
        sec = (ms/1000) % 60;
    return this.zfill(min, 2) + ":" + this.zfill(sec, 2)
  }

  render() {
    return (
      <div>
        <div className="tomato">
          {this.getTime()}
        </div>
      </div>
    );
  }
}
