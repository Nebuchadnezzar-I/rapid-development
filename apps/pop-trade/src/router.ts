import APP from './conf.ts';

type Route = {
    p?: string;
    c?: string | HTMLElement;
    s?: Route[];
};

const routes: Route[] = [
    { p: '/', c: document.createElement('c-dashboard') },
    { p: '/login', c: 'c-login' },
    { p: '/market', c: 'Market' },
    { p: '/statistics', c: 'Statistics' },

    /* /assets */ { p: '/assets/checkout', c: 'Checkout' },
    /* /assets */ { p: '/assets/payment', c: 'Payment' },

    /* /community */ { p: '/community/feed', c: 'Feed' },
    /* /community */ { p: '/community/topic', c: 'Topic' },
    /* /community */ { p: '/community/lives', c: 'Lives' },

    /* /personal */ { p: '/personal/info', c: 'PersonalInfo' },
    /* /personal */ { p: '/personal/kyc', c: 'KYC Verification' },
    /* /personal */ { p: '/personal/security', c: 'Security' },
    /* /personal */ { p: '/personal/account-security', c: 'Account Security' },
    /* /personal */ { p: '/personal/notification', c: 'Notification' },
    /* /personal */ { p: '/personal/currency', c: 'Currency Preferences' },
    /* /personal */ { p: '/personal/integration', c: 'Integration' },
    /* /personal */ { p: '/personal/payment', c: 'Payment Option' },
    /* /personal */ { p: '/personal/subscription', c: 'Theme' },
] as const;

export const router = (path: string) => {
    window.history.pushState({}, '', path);

    routes.forEach((route) => {
        if (route.p === path) {
            if (typeof route.c === 'string') {
                APP.innerHTML = route.c;
            } else {
                APP.innerHTML = '';
                APP.appendChild(route.c || document.createElement('div'));
            }
        }
    });
};
