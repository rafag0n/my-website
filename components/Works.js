import React from 'react';
import styles from './works.module.scss';

const title =
	'"Nenhum detalhe é pequeno o suficiente para não ser grandioso."';
const quote =
	'É com essa filosofia que começamos cada projeto. Seja um pequeno rodapé ou uma grande fachada, trato cada detalhe com o mesmo carinho, pois sei que neles está a chave do sucesso do seu espaço.';

const Works = () => (
	<div className={styles.works}>
		<h2 className={styles.works__title}>{title}</h2>
		<p className={styles.works__quote}>{quote}</p>
		<h4 className={styles.works__author}>Rafael Gonçalves</h4>
		<h5 className={styles.works__role}>Arquiteto-Chefe</h5>
	</div>
);

export default Works;
