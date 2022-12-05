import React from "react";
import { ErrorMessage, Field, useField } from "formik";

import "./textField.scss";

interface PropsType {
	label: string
	name: string
	type: string
}

export const TextField: React.FC<PropsType> = ({ label, ...props }) => {
	const [field, meta] = useField({ ...props })

	return (
		<div className='text__field'>
			<label className='label' htmlFor={field.name}>{label}</label>
			<Field className='field' {...field} {...props} autoComplete='off' />
			<div className='error__message'>
				<ErrorMessage name={field.name} />
			</div>
		</div>
	)
}
