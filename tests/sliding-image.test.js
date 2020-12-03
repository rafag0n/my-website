import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import SlidingImage from '../components/sliding-image';

const scrollValue = 100;
const slidingImage = () => screen.getByTestId('sliding_image');

describe('Sliding-image', () => {
	beforeEach(() => {
		render(<SlidingImage />);
	});

	it('Renders sliding image properly', () => {
		expect(slidingImage()).toBeTruthy();
	});

	it('slides horizontally when user scrolls', () => {
		fireEvent.scroll(window, { target: { scrollY: scrollValue } });
		expect(slidingImage()).toHaveStyle({ marginLeft: -scrollValue });
	});
});
