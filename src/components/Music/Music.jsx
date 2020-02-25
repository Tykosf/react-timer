import React from "react"

class Music extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			play: false
		}
		this.audio = new Audio(props.url)
	}

  componentDidMount() {
		this.togglePlay();
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
	}

  render() {
    return <></>
  }
}

export default Music;