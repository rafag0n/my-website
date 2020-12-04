import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import SlidingImage from '../components/sliding-image';

const scrollValue = 100;
const scrollOverMax = 250;
const maxScroll = 200;
const slidingImage = () => screen.getByTestId('sliding_image');

describe('Sliding-image', () => {
	beforeEach(() => {
		render(<SlidingImage maxScroll={maxScroll} />);
	});

	it('Renders sliding image properly', () => {
		expect(slidingImage()).toBeTruthy();
	});

	it('slides horizontally when user scrolls', () => {
		fireEvent.scroll(window, { target: { scrollY: scrollValue } });
		expect(slidingImage()).toHaveStyle({ marginLeft: -scrollValue });
	});

	it('should not scroll more than max scroll values', () => {
		fireEvent.scroll(window, { target: { scrollY: scrollOverMax } });
		expect(slidingImage()).toHaveStyle({ marginLeft: -maxScroll });
	});
});
