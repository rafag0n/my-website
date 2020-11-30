import React from 'react';
import Menu from './menu.js';
import styles from './header.module.scss';

export default function Header() {
	return (
		<header>
			<img src="/logo.svg" className={styles.header__logo} />
			<Menu />
		</header>
	);
}
