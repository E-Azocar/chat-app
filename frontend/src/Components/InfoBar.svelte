<script>
    import Link from "svelte-routing/src/Link.svelte";

    export let room;
</script>

<div class="card-header infobar">
    <div class="infobar-left content">
        <h3>{room}</h3>
        <i class="bx bxs-circle active" />
    </div>
    <div class="infobar-right content">
        <Link to="/" ><i class="bx bx-x close" /></Link>
    </div>
</div>

<style>
    .infobar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .active {
        color: rgb(20, 185, 14);
        margin: 0 1em;
    }
    .infobar .content {
        display: flex;
        align-items: center;
        margin: 0 1em;
    }
    .close {
        color: rgb(189, 26, 26);
        font-size: 25px;
    }
</style>
