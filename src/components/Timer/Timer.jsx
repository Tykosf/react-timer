import React from "react";
import { classNames, ToggleFilled, TogglePlayPause } from "../../helpers/toggles";
import { pause, play, pauseFilled, playFilled } from "../../assets";
import "./index.scss";

const Timer = ({ time, halfDuration, duration, active, handlePause, handlePlay }) => ( 
	<div className="timer">
		{
			duration < halfDuration && 
			<p className={classNames(duration)}>
				{duration < 0 ? "Time's up!" : "More than halfway there!"}
			</p>
		}	
		<div className="timer__body">
			<span>{time}</span>
			<i onClick={TogglePlayPause.bind(this, active, handlePause, handlePlay)}>
				<img 
					onMouseOver={(event) => ToggleFilled(event, active, pauseFilled, playFilled)}
					onMouseLeave={(event) => ToggleFilled(event, active, pause, play)}
					src={ active ? pause : play } 
					alt="pause/play"
				/>
			</i>
		</div>
	</div>
)

export default Timer