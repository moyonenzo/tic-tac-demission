<script lang="ts">
    import api from "$lib/api";

    import { ModeWatcher } from "mode-watcher";
    import ExclamationTriangle from "svelte-radix/ExclamationTriangle.svelte";

    import { Separator } from "$lib/components/ui/separator";
    import * as Alert from "$lib/components/ui/alert/index.js";

    import PersonPoint from "$lib/PersonPoint.svelte";
    import PersonCounter from "$lib/PersonCounter.svelte";

    const fetch_counters = async () => {
        const response = await api.get("/counters");
        return response;
    }

    const fetch_points = async () => {
        const response = await api.get("/points");
        return response;
    }

    let counters = fetch_counters();
    let points = fetch_points();

    const update_points = async () => {
        points = await fetch_points();
    }
</script>

<ModeWatcher />

<div class="flex w-full h-screen justify-center items-center">
    <div class="h-screen w-1/3 p-5">
        <div class="flex h-screen flex-col gap-5 justify-center items-center">
            {#await counters}
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
    </div>

    <div class="h-screen w-2/3 p-5">
        <div class="flex h-screen flex-col gap-5 justify-center items-center">
            {#await points}
                Chargement ...
            {:then points}
                {#each points as point, i (i)}
                    <PersonPoint
                        id={point.id}
                        login={point.login}
                        points={point.points}
                        place={i + 1}
                        on:update={update_points}
                    />
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
    </div>
</div>

<!--<div class="flex w-full h-screen justify-center items-center">-->



<!--</div>-->
