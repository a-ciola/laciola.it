import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Solutions from './Solutions';

const Home: React.FC = () => {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Solutions />
		</>
	);
};

export default Home;
