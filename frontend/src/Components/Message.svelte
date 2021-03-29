<script>
    export let text;
    export let user;
    export let name;
</script>

<div class="d-flex justify-content-center">
    {#if user === "admin"}
        <p class="text-muted admin-message">~ {text} ~</p>
    {:else if user === name}
        <div class="sender-message">
            <div>
                <p class="fs-5 name">{user}</p>
                <div class="text">
                    <p class="fs-5">{text}</p>
                </div>
            </div>
        </div>
    {:else}
        <div class="received-message">
            <p class="fs-5 name">{user}</p>
            <div class="text">
                <p class="fs-5">{text}</p>
            </div>
        </div>
    {/if}
</div>

<style>
    /* Admin Message */
    .admin-message {
        font-style: italic;
        text-align: center;
    }

    /* Received Message */
    .received-message {
        margin: 10px;
        justify-self: flex-start;
        width: 100%;
    }
    .received-message .text {
        width: fit-content;
        max-width: 350px;
        background: rgb(212, 212, 212);
        padding: 0 10px;
    }
    .received-message .name {
        margin: 0;
    }

    /* Sender Message */
    .sender-message {
        width: 100%;
        margin: 10px;
        display: flex;
        justify-content: flex-end;
    }
    .sender-message .text {
        width: fit-content;
        max-width: 350px;
        background: #0d6efd;
        color: #fff;
        padding: 0 10px;;
    }
    .sender-message .name {
        margin: 0;
    }
</style>
