const activeButton = (currentSpeed, upSpeed) => {
	return currentSpeed === upSpeed ? "active" : "speed"
}

const classNames = (duration) => {
	if(duration < 20 && duration >= 10) return "warning";
	if(duration < 0) return "success";
	if(duration < 10) return "warning-blink";
}

const ToggleFilled = (event, active, pause, play) => {
	event.currentTarget.src = active ? pause : play;
}

const TogglePlayPause = (active, handlePause, handlePlay) => {
	return active ? handlePause() : handlePlay();
}

export { activeButton, classNames, ToggleFilled, TogglePlayPause }