import React, { useState, useEffect } from 'react';
import styles from './sliding-image.scss';

export default function SlidingImage({
	speed = 1.2,
	imgUrl = '/home-page.jpg',
	maxScroll = 280,
}) {
	const [marginLeft, setMarginLeft] = useState(0);

	const handleScroll = () => {
		setMarginLeft(Math.min(-window.scrollY * speed, maxScroll));
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={styles.sliding_image}>
			<div
				className={styles.sliding_image__contents}
				style={{
					backgroundImage: `url(${imgUrl})`,
					marginLeft,
				}}
			/>
		</div>
	);
}
