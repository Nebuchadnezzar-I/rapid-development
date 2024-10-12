// type Route = {
//     p: string;
//     c: string;
//     f?: () => {};
//     s?: Route[];
// };
//
// const routes: Route[] = [
//     { p: '/', c: 'Dashboard' },
//     { p: '/login', c: 'c-login', f: () => import('./pages/login') },
//     { p: '/market', c: 'Market' },
//     {
//         p: '/assets',
//         c: 'Assets',
//         s: [
//             {
//                 p: '/assets/checkout',
//                 c: 'Checkout',
//             },
//             {
//                 p: '/assets/payment',
//                 c: 'Payment',
//             },
//         ],
//     },
//     { p: '/statistics', c: 'Statistics' },
//     {
//         p: '/community',
//         c: 'Community',
//         s: [
//             {
//                 p: '/community/feed',
//                 c: 'Feed',
//             },
//             {
//                 p: '/community/topic',
//                 c: 'Topic',
//             },
//             {
//                 p: '/community/lives',
//                 c: 'Lives',
//             },
//         ],
//     },
//     {
//         p: '/personal',
//         c: 'Personal',
//         s: [
//             {
//                 p: '/personal/info',
//                 c: 'PersonalInfo',
//             },
//             {
//                 p: '/personal/kyc',
//                 c: 'KYC Verification',
//             },
//             {
//                 p: '/personal/security',
//                 c: 'Security',
//             },
//             {
//                 p: '/personal/account-security',
//                 c: 'Account Security',
//             },
//             {
//                 p: '/personal/notification',
//                 c: 'Notification',
//             },
//             {
//                 p: '/personal/currency',
//                 c: 'Currency Preferences',
//             },
//             {
//                 p: '/personal/integration',
//                 c: 'Integration',
//             },
//             {
//                 p: '/personal/payment',
//                 c: 'Payment Option',
//             },
//             {
//                 p: '/personal/subscription',
//                 c: 'Theme',
//             },
//         ],
//     },
// ] as const;
