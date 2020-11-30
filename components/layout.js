/* eslint-disable react/prop-types */
import React from 'react';
import Header from './header';
import './header.module.scss';

export default function Layout({ children }) {
	return (
		<div>
			<Header></Header>
			{children}
		</div>
	);
}
