import React from 'react';
import styles from './menu.module.scss';

export default function Menu() {
	return (
		<div className={styles.menu}>
			<button className={styles.menu__open} />
		</div>
	);
}
