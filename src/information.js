import styles from './information.module.css';
import React from 'react';
import { useSelector } from 'react-redux';

export const Information = () => {
	const player = useSelector((store) => store.currentPlayer);
	const gameOver = useSelector((store) => store.isGameEnded);
	const draw = useSelector((store) => store.isDraw);
	return <InformationLayout player={player} gameOver={gameOver} draw={draw} />;
};

export const InformationLayout = ({ player, gameOver, draw }) => {
	return (
		<div className={styles['info']}>
			{gameOver
				? 'Победил игрок ' + (player === 'X' ? 'O' : 'X')
				: draw
					? 'Ничья'
					: 'Ход игрока ' + (player === 'X' ? 'X' : 'O')}
		</div>
	);
};
