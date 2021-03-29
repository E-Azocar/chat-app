<script>
    export let users;
</script>

<div class="col-md-4">
    <div class="card">
        <div class="card-body p-4">
            <ul class="list-group">
                {#each users as user}
                    <li class="list-group-item">{user.name}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style>
    .card {
        height: 100%;
    }
</style>
