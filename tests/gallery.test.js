import React from 'react';
import projects from '../config/projects';
import { render, screen, fireEvent } from '@testing-library/react';
import Gallery from '../components/gallery';

const image = (index) => screen.getByTestId(`gallery__image-${index}`);
const main = () => screen.getByTestId('gallery__main');

describe('/components/gallery', () => {
	beforeAll(() => {
		render(<Gallery images={projects[0].imageUrls} />);
	});

	it('should change image when click on button', () => {
		expect(main()).toHaveAttribute('src', projects[0].imageUrls[0]);
		fireEvent.click(image(1));
		expect(main()).toHaveAttribute('src', projects[0].imageUrls[1]);
	});
});
