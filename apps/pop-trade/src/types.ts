declare global {
    interface Window {
        router: (path: string) => void;
    }
}
