import React from "react"
import { classNames, ToggleFilled, TogglePlayPause } from "../../helpers/toggles"
import { pause, play, pauseFilled, playFilled } from "../../assets"
import * as classNamesLib from 'classnames'

import "./index.scss"

const Timer = ({ time, halfDuration, duration, active, handlePause, handlePlay }) => {

	const playPauseClassName = classNamesLib('fas',{
		'fa-pause': active,
		'fa-play': !active
	})

	return (
		<div className="timer">
			{
				duration < halfDuration && 
				<p className={classNames(duration)}>
					{duration < 0 ? "Time's up!" : "More than halfway there!"}
				</p>
			}
			<div className="timer__body">
				<span>{time}</span>
					<i
						className={playPauseClassName}
						onClick={TogglePlayPause.bind(this, active, handlePause, handlePlay)}
						onMouseOver={(event) => ToggleFilled(event, active, pauseFilled, playFilled)}
						onMouseLeave={(event) => ToggleFilled(event, active, pause, play)}
						alt="pause/play"
					/>
			</div>
		</div>
	)
}

export default Timer