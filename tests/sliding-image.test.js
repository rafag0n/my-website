import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import SlidingImage from '../components/sliding-image';

const scrollValue = 100;
const scrollOverMax = 260;
const maxScroll = 200;
const slidingImage = () => screen.getByTestId('sliding_image');
const scrollStyle = (value) => `margin-left: ${value}`;
const setResolution = (value) => {
	act(() => {
		window.innerWidth = value;
		window.dispatchEvent(new Event('resize'));
	});
};

describe('Sliding-image', () => {
	beforeEach(() => {
		render(<SlidingImage maxScroll={maxScroll} />);
	});

	it('Renders sliding image properly', () => {
		expect(slidingImage()).toBeTruthy();
	});

	it('slides horizontally when user scrolls', () => {
		setResolution(600);
		fireEvent.scroll(window, { target: { scrollY: scrollValue } });
		expect(slidingImage()).toHaveStyle(scrollStyle(-scrollValue + 'px'));
	});

	it('should not scroll more than max scroll values', () => {
		setResolution(600);
		fireEvent.scroll(window, { target: { scrollY: scrollOverMax } });
		expect(slidingImage()).toHaveStyle(scrollStyle(-maxScroll + 'px'));
	});

	it('should not scroll when resolution is over 1200', () => {
		setResolution(1201);
		fireEvent.scroll(window, { target: { scrollY: scrollOverMax } });
		expect(slidingImage()).toHaveStyle(scrollStyle('0px'));
	});

	it('sets margin left to 0 when it resizes to any size over 1200px', () => {
		setResolution(620);
		fireEvent.scroll(window, { target: { scrollY: scrollValue } });
		expect(slidingImage()).toHaveStyle(scrollStyle(-scrollValue + 'px'));
		setResolution(1220);
		expect(slidingImage()).toHaveStyle(scrollStyle('0px'));
	});
});
