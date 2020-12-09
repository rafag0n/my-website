import React from 'react';
import styles from './footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<img src="/logo-white.svg" className={styles.footer__logo} />
			<address className={styles.footer__address}>
				Avenida Elias João Tajra, 1601, Fátima <br />
				Teresina-PI <br />
				(86) 988592163
			</address>
		</footer>
	);
}
