import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Layout from '../components/layout';

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
			<main className={styles.main}>
				<Layout></Layout>
			</main>
		</div>
	);
}
