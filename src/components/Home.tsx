import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Solutions from './Solutions';
import QuoteSection from './QuoteSection';

const Home: React.FC = () => {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Solutions />
			<QuoteSection />
		</>
	);
};

export default Home;
