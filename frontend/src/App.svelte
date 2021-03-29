<script>
    import { Router, Route } from "svelte-routing";
    import Chat from "./Pages/Chat.svelte";
    import Join from "./Pages/Join.svelte";


</script>

<Router>
    <Route path="/" component={Join} />
    <Route path="/chat" component={Chat} />
</Router>
