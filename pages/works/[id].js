import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Work.module.scss';
import Layout from '../../components/layout';
import projects from '../../config/projects';
import Gallery from '../../components/gallery';

export default function WorksPage() {
	const router = useRouter();
	const { id } = router.query;
	const project = projects[id];

	return (
		<Layout>
			<div className={styles.work}>
				<h4 className={styles.work__name}>{project.name}</h4>
				<div className={styles.work__texts}>
					<ul className={styles.work__info}>
						<li>
							<b>Tipo de Projeto:</b>
							{project.type}
						</li>
						<li>
							<b>Localização:</b>
							{project.location}
						</li>
						<li>
							<b>Ano:</b>
							{project.year}
						</li>
					</ul>
					<p className={styles.work__description}>
						{project.description}
					</p>
				</div>
				<Gallery images={project.imageUrls} />
			</div>
		</Layout>
	);
}
