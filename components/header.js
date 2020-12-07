import React from 'react';
import Menu from './menu.js';
import styles from './header.module.scss';
import SideNav from './sidenav.js';
import Link from 'next/link';

const backgroundImage = "url('/logo.svg')";

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href="/">
				<button
					style={{ backgroundImage }}
					data-testid="header"
					className={styles.header__logo}
				/>
			</Link>
			<SideNav />
			<Menu />
		</header>
	);
}
