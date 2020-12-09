import Link from 'next/link';
import React from 'react';
import styles from './headline.module.scss';

const Headline = () => (
	<div className={styles.headline}>
		<h1>O espaço dos seus sonhos começa aqui!</h1>
		<Link href="/#contact-form">
			<button>Agende sua consultoria agora!</button>
		</Link>
	</div>
);

export default Headline;
