import { router } from './router.ts';
import './pages/login.ts';
import './types.ts';

// Client side navigation
window.router = router;

// On load render
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    router(path);
});
