import React from 'react'

export class Tomato extends React.Component {
  getDefaultProps() {
    return {
      time: (14 * 60 * 1000) + (24 * 1000),
      msg: "Time to work!"
    };
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

module.export = Tomato;
