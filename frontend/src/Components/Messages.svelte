<script>
    import Message from "./Message.svelte";
    import queryString from "query-string";

    const name = queryString.parse(window.location.search).name.trim().toLowerCase();
    export let messages;
</script>

{#each messages as { text, user }}
    <Message {text} {user} {name} />
{/each}
