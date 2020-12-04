import React from 'react';
import projects from '../config/projects';
import styles from './works.module.scss';

const Works = ({ length = 3, seeMore = true }) => {
	const renderProject = (project, i) => {
		if (i < length) {
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
			{seeMore ? (
				<button className={styles.works__more}>
					Conheça mais Projetos
				</button>
			) : null}
		</div>
	);
};

export default Works;
