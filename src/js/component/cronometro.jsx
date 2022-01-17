import React from "react";
import { useState, useEffect } from "react";
import { FontawesomeObjec } from "@fortawesome/fontawesome-svg-core";
import { faFont } from "@fortawesome/free-solid-svg-icons";

function Crono() {
	const [time, setTime] = useState(0);
	const [timerOn, setTimerOn] = useState(false);
	useEffect(() => {
		let interval = null;
		if (timerOn) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}),
		[timerOn];

	return (
		<>
			<div className="app">
				<i class="far fa-clock"></i>
				<h1>My Time</h1>
				<div className="seconds">
					<span>
						{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
					</span>
					<span>
						{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
					</span>
					<span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
				</div>
				<div className="actions">
					{!timerOn && time === 0 && (
						<button onClick={() => setTimerOn(true)}>
							Start Counting
						</button>
					)}
					{timerOn && (
						<button onClick={() => setTimerOn(false)}>
							Stop Counting
						</button>
					)}
					{!timerOn && time != 0 && (
						<button onClick={() => setTimerOn(true)}>Resume</button>
					)}
					{!timerOn && time != 0 && (
						<button onClick={() => setTime(0)}>Reset</button>
					)}
				</div>
			</div>
		</>
	);
}

export default Crono;
