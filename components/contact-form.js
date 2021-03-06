import React, { useState } from 'react';
import { Formik } from 'formik';
import styles from './contact-form.module.scss';
import MySelect from './my-select';
import PropTypes from 'prop-types';
import axios from 'axios';
import { projectScopeOptions, projectTypeOptions } from '../config/contact';

const ValidationError = ({ errors, field }) =>
	errors[field] ? (
		<div className={styles.contact_form__error}>{errors[field]}</div>
	) : (
		<div />
	);

const Sent = () => {
	return (
		<div data-testid="contact_form__sent" className={styles.contact_form}>
			<img
				src="/mail-success.svg"
				className={styles.contact_form__mailsuccess}
			/>
			<h2>Recebemos sua mensagem!</h2>
			<p>
				Retornaremos sua mensagem via whatsapp em até 2 dias úteis para
				agendarmos a primeira reunião.
			</p>
		</div>
	);
};

export default function ContactForm() {
	const [sent, setSent] = useState(false);

	const initialValues = {
		name: '',
		city: '',
		projectScope: '',
		projectType: '',
		whatsapp: '',
		message: '',
	};

	const validateErrors = (values) => {
		const errors = {};
		if (!values.name) errors.name = 'Insira seu Nome';
		else if (!values.city) errors.city = 'Insira sua cidade';
		else if (!values.projectScope)
			errors.projectScope = 'Selecione os projetos desejados';
		else if (!values.whatsapp) errors.whatsapp = 'Insira seu whatsapp.';
		else if (!values.projectType)
			errors.projectType = 'Selecione o tipo do seu projeto';
		return errors;
	};

	let onSubmit = async function (values, { setSubmitting }) {
		setSubmitting(true);
		try {
			await axios.post('/api/send-message', values);
			setSubmitting(false);
			setSent(true);
		} catch {
			setSubmitting(true);
		}
	};

	if (sent) return <Sent />;

	return (
		<div className="contact">
			<Formik
				onSubmit={onSubmit}
				initialValues={initialValues}
				validate={validateErrors}
				validateOnChange={false}
				validateOnBlur={false}
			>
				{({
					setFieldValue,
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					setFieldTouched,
					isSubmitting,
				}) => (
					<>
						<form
							id="contact-form"
							className={styles.contact_form}
							onSubmit={handleSubmit}
						>
							<h2>Agende sua consultoria</h2>
							<div className={styles.contact_form__cell}>
								<label htmlFor="name">Qual o seu nome?</label>
								<input
									className={styles.contact_form__input}
									type="text"
									name="name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
								/>
								<ValidationError errors={errors} field="name" />
							</div>
							<div className={styles.contact_form__cell}>
								<label htmlFor="city">
									Qual a cidade do seu imóvel?
								</label>
								<input
									className={styles.contact_form__input}
									type="text"
									name="city"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.city}
								/>
								<ValidationError errors={errors} field="city" />
							</div>
							<div className={styles.contact_form__cell}>
								<label htmlFor="projectScope">
									Quais projetos você deseja executar?
								</label>
								<MySelect
									placeholder="Selecione uma ou mais opções"
									field="projectScope"
									multi={true}
									options={projectScopeOptions}
									value={values.projectScope}
									onChange={setFieldValue}
									onBlur={setFieldTouched}
									error={errors.projectScope}
									touched={touched.projectScope}
								/>
								<ValidationError
									errors={errors}
									field="projectScope"
								/>
							</div>
							<div className={styles.contact_form__cell}>
								<label htmlFor="projectType">
									Seu futuro espaço é residencial ou
									comercial?
								</label>
								<MySelect
									placeholder="Selecione uma das opções"
									field="projectType"
									options={projectTypeOptions}
									value={values.projectType}
									onChange={setFieldValue}
									onBlur={setFieldTouched}
									error={errors.projectType}
									touched={touched.projectType}
								/>
								<ValidationError
									errors={errors}
									field="projectType"
								/>
							</div>
							<div className={styles.contact_form__cell}>
								<label htmlFor="city">
									Deixe seu Whatsapp com DDD para retornarmos
									contato:
								</label>
								<input
									className={styles.contact_form__input}
									type="phone"
									name="whatsapp"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.whatsapp}
								/>
								<ValidationError
									errors={errors}
									field="whatsapp"
								/>
							</div>
							<input
								data-testid="contact_form__submit"
								className={styles.contact_form__submit}
								type="submit"
								value="Agendar"
								disabled={isSubmitting}
							/>
						</form>
					</>
				)}
			</Formik>
		</div>
	);
}

ContactForm.propTypes = {
	isMock: PropTypes.bool,
};

ValidationError.propTypes = {
	errors: PropTypes.object,
	field: PropTypes.string,
	shouldShowWarns: PropTypes.bool,
};
