<script lang="ts">
    import { ModeWatcher } from "mode-watcher";
    import PersonCounter from "$lib/PersonCounter.svelte";

    let counters = [
        {
            login: "moyon_e",
            date: new Date("2024-12-31 12:00:00")
        },
        {
            login: "saconn_a",
            date: new Date("2024-11-05 17:00:00")
        },
        {
            login: "lequer_r",
            date: new Date("2025-01-09 17:00:00")
        }
    ].sort((a, b) => a.date - b.date);
</script>

<ModeWatcher />

<div class="flex h-screen flex-col gap-5 justify-center items-center">
    {#each counters as counter}
        <PersonCounter login={counter.login} date={counter.date} />
    {/each}
</div>
