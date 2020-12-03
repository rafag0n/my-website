import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../pages/index';

const sidenavOpen = 'sidenav__open';
const sidenavClose = 'sidenav__close';
const sidenavContents = 'sidenav__contents';
const hidden = '--hidden';
const visible = '--visible';

describe('Header', () => {
	beforeEach(() => {
		render(<App />);
	});

	it('Renders without crashing', () => {
		expect(screen.getByTestId('main')).toBeTruthy();
	});

	it('Renders header properly', () => {
		expect(screen.getByTestId('header')).toBeTruthy();
	});

	it('Opens menu properly', () => {
		expect(screen.getByTestId(sidenavContents)).toHaveClass(
			sidenavContents.concat(hidden)
		);
		fireEvent.click(screen.getByTestId(sidenavOpen));
		expect(screen.getByTestId(sidenavContents)).toHaveClass(
			sidenavContents.concat(visible)
		);
	});

	it('Closes menu properly', () => {
		expect(screen.getByTestId(sidenavContents)).toHaveClass(
			sidenavContents.concat(hidden)
		);
		fireEvent.click(screen.getByTestId(sidenavOpen));
		expect(screen.getByTestId(sidenavContents)).toHaveClass(
			sidenavContents.concat(visible)
		);
		fireEvent.click(screen.getByTestId(sidenavClose));
		expect(screen.getByTestId(sidenavContents)).toHaveClass(
			sidenavContents.concat(hidden)
		);
	});
});
