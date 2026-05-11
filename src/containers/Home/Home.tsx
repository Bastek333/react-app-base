import { useState } from "react";
import ZustandSection from "../../components/ZustandSection/ZustandSection";

type CountState = number;

const Home = () => {
	const intialState: CountState = 0;
	const [count, setCount] = useState(intialState);

	return (
		<>
			<h2>Home</h2>
			<section>
				<h3>Count button test</h3>
				<div className="card">
					<button type="button" onClick={() => setCount((count) => count + 1)}>
						{`Clicked ${count} ${count !== 1 ? "times" : "time"}`}
					</button>
				</div>
			</section>
			<ZustandSection />
		</>
	);
};

export default Home;
