import React, { useState } from 'react';
import menuButtons from '../config/menu-buttons';
import Link from 'next/link';
import styles from './sidenav.module.scss';

const visible = 'visible';
const hidden = 'hidden';

export default function SideNav() {
	const [visibility, setVisibility] = useState(hidden);
	const contentStyle = [
		styles.sidenav__contents,
		styles['sidenav__contents--'.concat(visibility)],
	].join(' ');

	return (
		<div>
			<button
				className={styles.sidenav__open}
				data-testid="sidenav__open"
				onClick={() => setVisibility(visible)}
			/>
			<div data-testid="sidenav__contents" className={contentStyle}>
				{menuButtons.map((item, i) => (
					<Link key={i} href={item.url}>
						<button className={styles.sidenav__button}>
							{item.name}
						</button>
					</Link>
				))}
				<button
					onClick={() => setVisibility(hidden)}
					className={styles.sidenav__close}
					data-testid="sidenav__close"
				>
					Fechar Menu
				</button>
			</div>
		</div>
	);
}
