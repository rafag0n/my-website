import React from 'react';
import Menu from './menu.js';
import styles from './header.module.scss';
import HiddenMenu from './hidden-menu.js';

export default function Header() {
	return (
		<header className={styles.header}>
			<img src="/logo.svg" className={styles.header__logo} />
			<HiddenMenu />
			<Menu />
		</header>
	);
}
