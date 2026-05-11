import { useZustandStore } from "../../state/useZustandStore";
import "./ZustandCounter.css";

const ZustandCounter = () => {
	const zustandCount = useZustandStore((state) => state.zustandCount);

	return (
		<div className="zustand-counter">
			{`Clicked ${zustandCount} ${zustandCount !== 1 ? "times" : "time"}`}
		</div>
	);
};

export default ZustandCounter;
