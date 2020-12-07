import React from 'react';
import projects from '../config/projects';
import styles from './works.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Works = ({ length }) => {
	const renderProject = (project, i) => {
		if ((i < length) | !length) {
			return (
				<div key={project.key}>
					<h3 className={styles.works__name}>{project.name}</h3>
					<img className={styles.works__img} src={project.imageUrl} />
				</div>
			);
		}
	};

	return (
		<div className={styles.works}>
			<div className={styles.works__list}>
				{projects.map(renderProject)}
			</div>
			{length ? (
				<Link href="/works">
					<button className={styles.works__more}>
						Conheça mais Projetos
					</button>
				</Link>
			) : null}
		</div>
	);
};

Works.propTypes = {
	length: PropTypes.any,
};

export default Works;
