import React from 'react';
import { Formik } from 'formik';
import Select from 'react-select'
import { projectScopeOptions, projectTypeOptions } from '../config/contact';

export default function ContactForm() {
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

	const onSubmit = () => {};

	return (
		<div className="contact">
			<Formik
				onSubmit={onSubmit}
				initialValues={initialValues}
				validate={validateErrors}
			>
				{({
					values,
					errors,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
						{errors.name}
						<input
							type="text"
							name="city"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.city}
						/>
						{errors.city}
						<Select options={projectScopeOptions} />
						{errors.projectScope}
						<Select options={projectTypeOptions} />
						{errors.projectType}
						<input
							type="text"
							name="whatsapp"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.whatsapp}
						/>
						{errors.whatsapp}
						<input type="submit"></input>
					</form>
				)}
			</Formik>
		</div>
	);
}
