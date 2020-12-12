import React from 'react';
import Headline from '../components/headline';
import SlidingImage from '../components/sliding-image';
import ContactForm from '../components/contact-form';
import Works from '../components/works';
import Quote from '../components/quote';
import Layout from '../components/layout';

export default function Home() {
	return (
		<Layout>
			<Headline />
			<SlidingImage />
			<Quote />
			<Works length={3} />
			<ContactForm />
		</Layout>
	);
}
