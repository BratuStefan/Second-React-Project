import React from "react";
import "../App.js";

function ImageGenerate({
	handleOnSetRoboInputChange,
	handleOnRoboImageChange,
	handleRobo,
}) {
	return (
		<>
			<h1>Image</h1>
			<p>
				<input
					type='text'
					placeholder='input image address'
					onChange={handleOnSetRoboInputChange}
				/>
				<button onClick={handleOnRoboImageChange}>Generate New Image</button>
			</p>
			<div className='image_div'>{handleRobo.image}</div>
		</>
	);
}

export default ImageGenerate;
