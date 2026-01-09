import { useLocation, Outlet, ScrollRestoration } from '@tanstack/react-router';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const RootLayout: React.FC = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<ScrollRestoration />
		</>
	);
};

export default RootLayout;
