import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../pages/index';

const get = (id) => () => screen.getByTestId(id);
const sidenavOpen = get('sidenav__open');
const sidenavClose = get('sidenav__close');
const sidenavContents = get('sidenav__contents');
const sidenavHidden = 'sidenav__contents--hidden';
const sidenavVisible = 'sidenav__contents--visible';

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
		expect(sidenavContents()).toHaveClass(sidenavHidden);
		fireEvent.click(sidenavOpen());
		expect(sidenavContents()).toHaveClass(sidenavVisible);
	});

	it('Closes menu properly', () => {
		expect(sidenavContents()).toHaveClass(sidenavHidden);
		fireEvent.click(sidenavOpen());
		expect(sidenavContents()).toHaveClass(sidenavVisible);
		fireEvent.click(sidenavClose());
		expect(sidenavContents()).toHaveClass(sidenavHidden);
	});
});
