const ROUTES = {
	HOME: '/',
	APP: '/app',
	LOGIN: '/auth/login',
	SIGNUP: '/auth/signup',
	FORGOT_PASSWORD: '/auth/forgot-password',
	TERMS_PRIVACY: '/terms-privacy',
	SUPPORT: 'mailto:support@tickzer.com' // TODO: Change this to the FAQs page when it's ready
} as const;

export default ROUTES;
