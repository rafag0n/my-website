import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styles from './my-select.module.scss';

export default function MySelect({
	onChange,
	onBlur,
	options,
	field,
	multi,
	value,
	placeholder,
}) {
	const handleChange = (value) => {
		console.log(field, value);
		onChange(field, value);
	};

	const handleBlur = (value) => {
		onBlur(field, value);
	};

	return (
		<div className={styles.my_select}>
			<Select
                isSearchable={false}
				options={options}
				placeholder={placeholder}
				id={field}
				isMulti={multi}
				onChange={handleChange}
				onBlur={handleBlur}
				value={value}
			/>
		</div>
	);
}

MySelect.propTypes = {
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	options: PropTypes.array,
	field: PropTypes.string,
	multi: PropTypes.bool,
	value: PropTypes.any,
	placeholder: PropTypes.string,
};
