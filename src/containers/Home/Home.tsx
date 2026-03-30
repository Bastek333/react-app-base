import { useState } from "react";

type CountState = number;

const React = () => {
	const intialState: CountState = 0;
	const [count, setCount] = useState(intialState);

	return (
		<>
			<h2>Home</h2>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					{`Clicked ${count} ${count !== 1 ? 'times' : 'time'}`}
				</button>
			</div>
		</>
	);
};

export default React;
