<script>
    import { onMount } from 'svelte';
    import { load } from './markdown';
    import Logo from './Logo.svelte';

    let content;

    onMount(() => {
        content = load("intro");
    });
</script>

<style>
.main {
    max-width: 900px;
    margin: auto;
}

header {
    display: flex;
    text-align: center;
}

header h1 {
    font-size: 80px;
    display: inline-block;
    padding-top: 10%;
    font-family: "GhoulFriAOE";
    margin-bottom: 0;
}

header p {
    font-size: 30px;
}
</style>

<div class="main">
    <header>
        <Logo />
        <div>
            <h1>Madbrain's Lab</h1>
            <p>"Un cerveau plein de paresse est l’atelier du diable."</p>
        </div>
    </header>
    
    <div class="markdown">{@html $content}</div>
</div>