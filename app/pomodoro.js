export class Pomodoro {
  constructor() {
    this.min = 25;
    this.sec = 0;
    this.inteval = null;
  }

  // Update the pomodore values, is our beatmachine
  update() {
    if ( this.min >= 1 && this.sec == 0) {
      this.min-- ;
      this.sec =  59;
    }
    if ( this.min == 0 && this.sec == 0 ) {
      return this.finish();
    }
    this.draw();
    this.sec--;
  }

  // Display pomodoro values in DOM
  draw() {
    if (this.min < 10) {
      document.getElementById("minutes").innerHTML = "0" + this.min;
    } else {
      document.getElementById("minutes").innerHTML = this.min;
    }
    if (this.sec < 10) {
      document.getElementById("seconds").innerHTML = "0" + this.sec;
    } else {
      document.getElementById("seconds").innerHTML = this.sec;
    }
  }

  // Show the "Well done" message after the countdown!
  // Stop the countdown
  finish() {
    this.stop();
    let text = document.getElementById("osd").getElementsByTagName("p")[0];
    text.innerHTML = "Take a break!";
    text.style.color = "#2bbe69";
  }

  // Start the countdown
  start() {
    this.draw();
    this.interval = setInterval(() => {
      this.update();
    },1000);
  }

  // Stop the countdown
  stop() {
    clearInterval(this.interval);
    this.draw();
  }

  // Restore our timer to default
  reset() {
    this.stop();
    this.min = 25;
    this.sec = 0;
    this.draw();
    let text = document.getElementById("osd").getElementsByTagName("p")[0];
    text.innerHTML = "Time to work";
    text.style.color = "#e74c3c";
  }
}

export default Pomodoro;
