import styles from './app.module.css';
import { Field } from './field';
import { Information } from './information';
import { store } from './store';

export const App = () => {
	function krestik(cells) {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
				store.dispatch({ type: 'GAMEOVER', payload: true });
			}
		}
		return null;
	}

	const cellClick = (index) => {
		let { currentPlayer, isGameEnded, isDraw, field, counter } = store.getState();
		const fieldCopy = [...field];
		if (isGameEnded || isDraw || fieldCopy[index]) return;
		fieldCopy[index] = currentPlayer;

		currentPlayer === 'X' ? (currentPlayer = 'O') : (currentPlayer = 'X');
		store.dispatch({
			type: 'CELL_CLICK',
			payload: {
				currentPlayer: currentPlayer,
				isGameEnded: isGameEnded,
				isDraw: isDraw,
				field: fieldCopy,
				counter: counter + 1,
			},
		});

		krestik(fieldCopy);

		if (counter === 8) {
			store.dispatch({ type: 'DRAW', payload: true });
		}
	};

	return <AppLayout cellClick={cellClick} />;
};

export const AppLayout = ({ cellClick }) => {
	return (
		<div className={styles['wrapper']}>
			<Information />
			<Field click={cellClick} />
			<button
				className={styles['newGame']}
				onClick={() => store.dispatch({ type: 'CLEAR', payload: '' })}
			>
				Начать заново
			</button>
		</div>
	);
};
