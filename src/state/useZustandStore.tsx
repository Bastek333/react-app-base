import { create } from "zustand";

type ZustandState = {
	zustandCount: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
};

export const useZustandStore = create<ZustandState>((set) => {
	return {
		zustandCount: 0,
		increment() {
			set((state) => ({ zustandCount: state.zustandCount + 1 }));
		},
		decrement() {
			set((state) => ({ zustandCount: state.zustandCount - 1 }));
		},
		reset() {
			set({ zustandCount: 0 });
		},
	};
});
