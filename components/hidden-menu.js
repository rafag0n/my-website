import React, { useState } from 'react';
import menuButtons from '../config/menu-buttons';
import Link from 'next/link';
import styles from './hidden-menu.module.scss';

export default function HiddenMenu() {
	const [visible, setVisible] = useState(false);
	const currentContentStyle = 'hidden-menu__contents--'.concat(
		visible ? 'visible' : 'hidden'
	);
	const contentStyle = [
		styles['hidden-menu__contents'],
		styles[currentContentStyle],
	].join(' ');

	return (
		<div>
			<button
				className={styles['hidden-menu__open']}
				onClick={() => setVisible(!visible)}
			/>
			<div className={contentStyle}>
				{menuButtons.map((item, i) => (
					<Link key={i} href={item.url}>
						<button className={styles['hidden-menu__button']}>
							{item.name}
						</button>
					</Link>
				))}
				<button
					onClick={() => setVisible(false)}
					className={styles['hidden-menu__close']}
				>
					Fechar Menu
				</button>
			</div>
		</div>
	);
}
