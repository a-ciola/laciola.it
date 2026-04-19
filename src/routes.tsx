import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import PrivacyCompliance from './components/PrivacyCompliance';
import TermsOfEngagement from './components/TermsOfEngagement';
import LegalFramework from './components/LegalFramework';
import Home from './components/Home';
import Quote from './components/Quote';
import RootLayout from './components/RootLayout';

export const rootRoute = createRootRoute({
	component: RootLayout,
});

// Route definitions
const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Home,
});

const privacyRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/privacy',
	component: PrivacyCompliance,
});

const termsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/terms',
	component: TermsOfEngagement,
});

const legalRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/legal',
	component: LegalFramework,
});

const quoteRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/quote',
	component: Quote,
});

export const routeTree = rootRoute.addChildren([
	indexRoute,
	privacyRoute,
	termsRoute,
	legalRoute,
	quoteRoute,
]);

export const router = createRouter({ routeTree, scrollRestoration: true });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}
