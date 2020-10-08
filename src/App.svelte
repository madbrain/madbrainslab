<script>
    import Router from 'svelte-spa-router';
    import Intro from './Intro.svelte';
    import Page from './Page.svelte';

    const routes = {
        '/': Intro,
        '/page/:id': Page
    };
</script>

<Router {routes}/>