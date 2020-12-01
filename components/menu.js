import React from 'react';
import Link from 'next/link';
import styles from './menu.module.scss';
import menuButtons from '../config/menu-buttons';

export default function Menu() {
	return (
		<div className={styles.menu}>
			{menuButtons.map((item, i) => (
				<Link key={i} href={item.url}>
					<button href={item.url} className={styles.menu__item}>
						{item.name}
					</button>
				</Link>
			))}
		</div>
	);
}
