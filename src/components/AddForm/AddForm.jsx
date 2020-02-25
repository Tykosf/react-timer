import React from "react"
import Button from "../Button/Button"
import "./index.scss"

class AddForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputText: ""
		}
	}

	handleChange = (event) => {
		this.setState({ inputText: event.target.value })
	}

	render() {
		return (
			<div className="add-time">	
				<span>Countdown:</span>
				<input 
					type="text" 
					placeholder="(Min)" 
					onChange={this.handleChange}
				/>
				<Button 
					className="start"
					handleClick={this.props.handleStart.bind(this,this.state.inputText)}
				>
					Start
				</Button>
			</div>
		)
	}
}

export default AddForm