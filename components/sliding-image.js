import React, { useState, useEffect } from 'react';
import styles from './sliding-image.scss';
import PropTypes from 'prop-types';

export default function SlidingImage({
	speed = 1.0,
	imgUrl = '/home-page.jpg',
	maxScroll = 250,
}) {
	const [marginLeft, setMarginLeft] = useState(0);

	const handleScroll = () => {
		if (window.innerWidth < 800) {
			setMarginLeft(Math.max(-window.scrollY * speed, -maxScroll));
		}
	};

	const handleResize = () => {
		if (window.innerWidth > 1200) {
			setMarginLeft(0);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={styles.sliding_image}>
			<div
				data-testid="sliding_image"
				className={styles.sliding_image__contents}
				style={{
					backgroundImage: `url(${imgUrl})`,
					marginLeft,
				}}
			/>
		</div>
	);
}

SlidingImage.propTypes = {
	speed: PropTypes.number,
	imgUrl: PropTypes.string,
	maxScroll: PropTypes.number,
};
