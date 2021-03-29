<script>
    import { onMount, onDestroy } from "svelte";
    import queryString from "query-string";
    import { io } from "socket.io-client";

    import InfoBar from "../Components/InfoBar.svelte";
    import Messages from "../Components/Messages.svelte";

    let room;
    let name;
    let message;
    let messages = [];
    let users = [];

    const endpoint = "http://localhost:4000";

    const location = window.location.search;
    room = queryString.parse(location).room;
    name = queryString.parse(location).name;

    const socket = io(endpoint);

    onMount(() => {
        console.log(users)
    });

    socket.emit("join", { name, room });

    $: socket.on("message", (message) => {
        socket.removeAllListeners();
        messages = [...messages, message];
    });

    onDestroy(() => {
        socket.disconnect();
    });

    // Send messages
    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit("sendMessage", message);
            message = "";
        }
    };
</script>

<div class="container-fluid">
        <div class="col-md-8 mt-5 mx-auto">
            <div class="card">
                <InfoBar {room} />
                <div class="card-body messages-container">
                    <Messages {messages} />
                </div>
                <div class="card-footer p-3">
                    <form on:submit={sendMessage}>
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Mensaje"
                                bind:value={message}
                            />
                            <button class="btn btn-primary" type="submit">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</div>

<style>
    .messages-container {
        overflow: auto;
        max-height: 400px;
    }
    .card {
        height: 100%;
    }
</style>
