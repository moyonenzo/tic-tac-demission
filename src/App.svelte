<script lang="ts">
    import { ModeWatcher } from "mode-watcher";

    import { Separator } from "$lib/components/ui/separator";

    import * as Avatar from "$lib/components/ui/avatar";
    import * as Card from "$lib/components/ui/card";
    import Counter from "$lib/Counter.svelte";
</script>

<ModeWatcher />

<div class="flex h-screen justify-center items-center">
    <Card.Root>
        <Card.Content>

            <div class="flex h-5 items-center space-x-4 text-2xl">

                <Counter date={new Date("2024-11-05 17:00:00")} />

                <Avatar.Root>
                    <Avatar.Image src="https://trombine.etna.io/saconn_a/large" alt="@moyon_e" />
                    <Avatar.Fallback>SA</Avatar.Fallback>
                </Avatar.Root>

                <Separator orientation="vertical" />

                <Avatar.Root>
                    <Avatar.Image src="https://trombine.etna.io/moyon_e/large" alt="@moyon_e" />
                    <Avatar.Fallback>ME</Avatar.Fallback>
                </Avatar.Root>

                <Counter date={new Date("2024-12-31 12:00:00")} />
            </div>


        </Card.Content>
    </Card.Root>
</div>