import React, { useState } from 'react';
import styles from './gallery.module.scss';
import PropTypes from 'prop-types';

export default function Gallery({ images = [] }) {
	const [main, setMain] = useState(0);

	const imageClass = (i) => 
		styles[i == main ? 'gallery__image--selected' : 'gallery__image'];

	return (
		<div className={styles.gallery}>
			<img className={styles.gallery__main} src={images[main]} />
			<div className={styles.gallery__image_list}>
				{images.map((image, i) => (
					<img
						onClick={() => setMain(i)}
						key={i}
						className={imageClass(i)}
						src={image}
					/>
				))}
			</div>
		</div>
	);
}

Gallery.propTypes = {
	images: PropTypes.any,
};
