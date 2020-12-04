import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from '../components/header';
import Headline from '../components/headline';
import SlidingImage from '../components/sliding-image';
import Works from '../components/Works';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main} data-testid="main">
				<div className={styles.top_wrapper}>
					<Header />
					<Headline />
					<SlidingImage />
					<Works />
				</div>
			</main>
		</div>
	);
}
