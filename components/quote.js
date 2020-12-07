import React from 'react';
import styles from './quote.module.scss';

const title = '"Nenhum detalhe é pequeno o suficiente para não ser grandioso."';
const quote =
	'É com essa filosofia que começamos cada projeto. Seja um pequeno rodapé ou uma grande fachada, trato cada detalhe com o mesmo carinho, pois sei que neles está a chave do sucesso do seu espaço.';

const Quote = () => {
	return (
		<div className={styles.quote}>
			<h2 className={styles.quote__title}>{title}</h2>
			<p className={styles.quote__quote}>{quote}</p>
			<h4 className={styles.quote__author}>Rafael Gonçalves</h4>
			<h5 className={styles.quote__role}>Arquiteto-Chefe</h5>
			<img className={styles.quote__photo} src="/profile.jpg" />
		</div>
	);
};

export default Quote;
