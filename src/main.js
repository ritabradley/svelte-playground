import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        name: 'Rita',
        age: 33,
    },
});

export default app;