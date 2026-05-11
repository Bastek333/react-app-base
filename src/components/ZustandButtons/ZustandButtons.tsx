import { useShallow } from "zustand/react/shallow";
import { useZustandStore } from "../../state/useZustandStore";

const ZustandButtons = () => {
	const { increment, decrement, reset } = useZustandStore(
		useShallow((state) => ({
			increment: state.increment,
			decrement: state.decrement,
			reset: state.reset,
		})),
	);

	return (
		<div className="card">
			<button type="button" onClick={decrement}>
				Subtract count
			</button>
			<button type="button" onClick={increment}>
				Add count
			</button>
			<button type="button" onClick={reset}>
				Reset count
			</button>
		</div>
	);
};

export default ZustandButtons;
