import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import styles from '../styles/Home.module.scss';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ pageName, children }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>
					Rafael Gonçalves Arquitetura{' '}
					{pageName ? '|' + pageName : ''}
				</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<main className={styles.main} data-testid="main">
				<div className={styles.top_wrapper}>
					<Header />
					{children}
					<Footer />
				</div>
			</main>
		</div>
	);
}

Layout.propTypes = {
	pageName: PropTypes.any,
	children: PropTypes.any,
};
