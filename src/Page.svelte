<script>
    import { onMount } from 'svelte';
    import { load } from './markdown'

    export let params = {};
    let content;

    onMount(() => {
        content = load(params.id);
    });
</script>

<style>
.main {
    max-width: 800px;
    margin: auto;
}
</style>

<div class="main">
    <div class="markdown">{@html $content}</div>
</div>