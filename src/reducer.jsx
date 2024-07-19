export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(null),
	counter: 0,
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'CELL_CLICK': {
			return payload;
		}
		case 'CLEAR': {
			return initialState;
		}
		case 'GAMEOVER': {
			return { ...state, isGameEnded: payload };
		}
		case 'DRAW': {
			return { ...state, isDraw: payload };
		}
		default: {
			return state;
		}
	}
};
