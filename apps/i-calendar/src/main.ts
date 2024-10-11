import './style.css';
import { trpc } from './trpc';

async function fetchGreeting() {
    try {
        const response = await trpc.hello.query({ name: 'Vite' });
        console.log(response);
        document.getElementById('output')!.textContent = response;
    } catch (error) {
        console.error('Error fetching greeting:', error);
    }
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = 'Infotech calendar';
window.addEventListener('load', fetchGreeting);
