<script lang="ts">
    import axios from "axios";

    import { ModeWatcher } from "mode-watcher";
    import ExclamationTriangle from "svelte-radix/ExclamationTriangle.svelte";

    import PersonCounter from "$lib/PersonCounter.svelte";
    import * as Alert from "$lib/components/ui/alert/index.js";

    const fetch_counters = async () => {
        const response = await axios.get("http://85.215.133.119/counters/");
        return response.data;
    }
</script>

<ModeWatcher />

<div class="flex h-screen flex-col gap-5 justify-center items-center">
    {#await fetch_counters()}
        Chargement ...
    {:then counters}
        {#each counters as counter}
            <PersonCounter login={counter.login} date={new Date(counter.date)} />
        {/each}
    {:catch error}
        <Alert.Root variant="destructive">
            <ExclamationTriangle class="h-4 w-4" />
            <Alert.Title>Error</Alert.Title>
            <Alert.Description>
                {error}
            </Alert.Description>
        </Alert.Root>
    {/await}
</div>
