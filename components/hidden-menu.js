import React, { useState } from 'react';
import menuButtons from '../config/menu-buttons';
import Link from 'next/link';
import styles from './hidden-menu.module.scss';

const visible = 'visible';
const hidden = 'hidden';

export default function HiddenMenu() {
	const [visibility, setVisibility] = useState(hidden);
	const contentStyle = [
		styles['hidden-menu__contents'],
		styles['hidden-menu__contents--'.concat(visibility)],
	].join(' ');

	return (
		<div>
			<button
				className={styles['hidden-menu__open']}
				onClick={() => setVisibility(visible)}
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
					onClick={() => setVisibility(hidden)}
					className={styles['hidden-menu__close']}
				>
					Fechar Menu
				</button>
			</div>
		</div>
	);
}
