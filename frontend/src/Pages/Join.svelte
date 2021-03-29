<script>
    import { navigate } from "svelte-routing";

    let name = "";
    let room = "";

    const submitHandler = (e) => {
        e.preventDefault();

        if (name !== "" && room !== "") {
            navigate(`/chat?name=${name}&room=${room}`);
        }
    };
</script>

<div class="col-md-5 card mx-auto mt-large">
    <div class="card-body p-3">
        <div class="card-title text-center">
            <h2>Chat App</h2>
        </div>

        <form on:submit={submitHandler}>
            <div class="mb-3">
                <label for="name" class="form-label">Nombre de usuario</label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    autocomplete="off"
                    bind:value={name}
                    required
                />
            </div>
            <div class="mb-3">
                <label for="room" class="form-label">Sala de chat</label>
                <input
                    type="text"
                    class="form-control"
                    id="room"
                    autocomplete="off"
                    bind:value={room}
                    required
                />
            </div>
            <button type="submit" class="btn btn-primary col-12">
                Unirse
            </button>
        </form>
    </div>
</div>

<style>
</style>
