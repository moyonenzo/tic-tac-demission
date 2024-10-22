<script lang="ts">
    import Counter from "$lib/Counter.svelte";

    import * as Avatar from "$lib/components/ui/avatar";
    import * as Card from "$lib/components/ui/card";

    export let login: string;
    export let date : Date;
</script>

<Card.Root>
    <Card.Content>
        <div class="flex h-5 items-center space-x-4 text-2xl">
            <Avatar.Root>
                <Avatar.Image src="https://trombine.etna.io/{login}/large" alt="@{login}" />
                <Avatar.Fallback />
            </Avatar.Root>

            <Counter date={date} />
        </div>
    </Card.Content>
</Card.Root>