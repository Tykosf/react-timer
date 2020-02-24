import React from "react";
import AddForm from "./components/AddForm/AddForm";
import Timer from "./components/Timer/Timer";
import SpeedButtons from "./components/SpeedButtons/SpeedButtons";
import validateInput from "./validation/validation.js";
import Music from "./components/Music/Music";
import "./App.scss";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      time: "00:00",
      speed: 1,
      active: false,
      duration: 0,
      halfDuration: 0
    };
    this.Interval = "";
  }
    
  ChangeSpeed = (speed) => {
    this.setState({ speed });
    if(this.state.duration <= 0 || !this.state.active) return;
    clearInterval(this.Interval);
    this.Interval = setInterval(this.tick, 1000 / speed);
  }

  tick = () => {
    let duration = this.state.duration;
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}

    if(duration === 0) {
      this.setState({ duration: 0, active: !this.state.active});
      clearInterval(this.Interval);
    }

    this.setState({
        time: `${minutes}:${seconds}`,
        duration: --duration
    });
  }

  handleStart = (time) => {
    clearInterval(this.Interval);
    if(!validateInput(time)) {
      this.setState({ active: false });
      return;
    }

    if(time < 10) time = "0" + time;
    const duration = Number(time) * 60;
    this.setState({ 
      duration,
      halfDuration: duration / 2,
      active: !this.state.active
    });
    this.Interval = setInterval(this.tick, 1000 / this.state.speed);
  }

  handlePause = () => {
    this.setState({ active: !this.state.active });
    clearInterval(this.Interval);
  }

  handlePlay = () => {
    if(this.state.duration < 0) return;
    this.setState({ active: !this.state.active })
    this.Interval = setInterval(this.tick, 1000 / this.state.speed);
  }

  render() {
    return (
      <div className="App">
        <AddForm
          handleStart={this.handleStart}
        />
        <Timer 
          time={this.state.time}
          duration={this.state.duration}
          halfDuration={this.state.halfDuration}
          active={this.state.active} 
          handlePause={this.handlePause}
          handlePlay={this.handlePlay}
        />
        <SpeedButtons 
          speed={this.state.speed} 
          ChangeSpeed={this.ChangeSpeed} 
        />
        {this.state.duration < 0 ? <Music url={"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"}/> : <></>}
      </div>
    );  
  }
}

export default App;