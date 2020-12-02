import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from '../components/header';
import SlidingImage from '../components/sliding-image';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main} data-testid="main">
				<div className={styles.top_wrapper}>
					<Header />
					<SlidingImage />
				</div>
			</main>
		</div>
	);
}
