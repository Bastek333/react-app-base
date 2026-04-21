import { useState } from "react";

type CountState = number;

const Home: React.FC = () => {
	const intialState: CountState = 0;
	const [count, setCount] = useState(intialState);

	return (
		<>
			<h2>Home</h2>
			<section>
				<h3>Count button test</h3>
				<div className="card">
					<button onClick={() => setCount((count) => count + 1)}>
						{`Clicked ${count} ${count !== 1 ? "times" : "time"}`}
					</button>
				</div>
			</section>
		</>
	);
};

export default Home;
