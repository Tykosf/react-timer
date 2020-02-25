import React from "react"
import Button from "../Button/Button"
import { activeButton } from "../../helpers/toggles"
import "./index.scss"

const SpeedButtons = ({ speed, ChangeSpeed  }) => (
	<div className="speedButtons">
		<Button 
			className={activeButton(speed, 1)}
			handleClick={ChangeSpeed.bind(this,1)}
		>
			1x
		</Button>
		<Button 
			className={activeButton(speed, 1.5)}
			handleClick={ChangeSpeed.bind(this,1.5)}
		>
			1.5x
		</Button>
		<Button 
			className={activeButton(speed, 2)}
			handleClick={ChangeSpeed.bind(this,2)}
		>
			2x
		</Button>
	</div>
)


export default SpeedButtons