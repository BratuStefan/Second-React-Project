import { useState } from "react";
import React from "react";
import "./App.css";
import ImageGenerate from "./components/ImageGenerate";

function App() {
	const [robot, setRobot] = useState(25);

	const onRobotIncrease = () => {
		setRobot(robot + 1);
	};

	const onRobotDecrease = () => {
		setRobot(robot - 1);
	};

	const [robo, setRobo] = useState({
		name: "Robo",
		color: (
			<button style={{ backgroundColor: "blue" }} id='roboButtonBlue'>
				Blue/Red Button
			</button>
		),
		height: (
			<div style={{ padding: "100px 30px", backgroundColor: "green" }}></div>
		),
		image: (
			<img
				className='robotImage'
				src='https://www.royalunibrew.com/wp-content/uploads/2021/07/blank-profile-picture-973460_640-300x300.png'
				alt='blank_image'
			/>
		),
	});

	const [roboInput, setRoboInput] = useState({
		input: "",
	});

	const onSetRoboInputChange = (event) => {
		setRoboInput({ input: `${event.target.value}` });
	};

	const onRoboNameChange = (event) => {
		setRobo({ ...robo, name: event.target.value });
	};

	const onRoboColorChange = () => {
		if (robo.color.props.id === "roboButtonBlue")
			setRobo({
				...robo,
				color: (
					<button style={{ backgroundColor: "red" }} id='roboButtonRed'>
						Blue/Red Button
					</button>
				),
			});

		if (robo.color.props.id === "roboButtonRed")
			setRobo({
				...robo,
				color: (
					<button style={{ backgroundColor: "blue" }} id='roboButtonBlue'>
						Blue/Red Button
					</button>
				),
			});
	};

	const onRoboImageChange = () => {
		setRobo({
			...robo,
			image: (
				<img
					className='robotImage'
					src={`${roboInput.input}`}
					style={{ maxWidth: "300px", maxHeight: "300px" }}
					alt='input_image'
				/>
			),
		});
	};

	const onRoboHeightChange = (event) => {
		setRobo({
			...robo,
			height: (
				<div
					style={{
						padding: `${event.target.value}px 30px`,
						backgroundColor: "green",
					}}></div>
			),
		});
	};

	const log = () => {
		console.log(roboInput.input);
	};

	log();
	return (
		<div className='container'>
			<div className='robot'>
				<h1>Roboti</h1>
				<div className='robot_content'>
					<button onClick={onRobotDecrease}>-</button>
					<p>{robot}</p>
					<button onClick={onRobotIncrease}>+</button>
				</div>
				<p>
					{robot > 30 ? (
						<img
							className='robotImage'
							src='https://robohash.org/MPE.png?set=set3'
							alt='robot_image'
						/>
					) : (
						""
					)}
				</p>
			</div>
			<div className='robo'>
				<h1>Robot Oject</h1>
				<p>Robot Name: {robo.name}</p>
				<p>
					Change Name:{" "}
					<input
						type='text'
						placeholder='change name'
						onChange={onRoboNameChange}
					/>
				</p>
				<p>
					Robot Color: <span onClick={onRoboColorChange}>{robo.color}</span>
				</p>
				<p>
					Height:{" "}
					<input
						type='text'
						placeholder='change height in pixels'
						onChange={onRoboHeightChange}
					/>
				</p>
				<div>{robo.height}</div>
				<ImageGenerate
					handleOnSetRoboInputChange={onSetRoboInputChange}
					handleOnRoboImageChange={onRoboImageChange}
					handleRobo={robo}
				/>
			</div>
		</div>
	);
}

export default App;
