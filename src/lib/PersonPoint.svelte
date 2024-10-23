<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { Minus, Plus } from 'lucide-svelte';

    import { Button } from "$lib/components/ui/button";
    import { Separator } from "$lib/components/ui/separator";

    import * as Avatar from "$lib/components/ui/avatar";
    import * as Card from "$lib/components/ui/card";
    import api from "$lib/api";

    export let id: number;
    export let login: string;
    export let points: number;
    export let place: number;

    const dispatch = createEventDispatcher()

    const decreasePoints = async () => {
        points --;
        await api.put(`/points/${id}`, {
            points
        });

        dispatch('update', { points });
    }

    const increasePoints = async () => {
        points ++;
        await api.put(`/points/${id}`, {
            points
        });

        dispatch('update', { points });
    }
</script>

<Card.Root class="w-full">
    <Card.Content>
        <div class="flex flex-row justify-between">
            <div class="flex h-5 items-center space-x-4 text-2xl">
                <h1>{place}.</h1>
                <Separator orientation="vertical"/>

                <Avatar.Root>
                    <Avatar.Image src="https://trombine.etna.io/{login}/large" alt="@{login}" />
                    <Avatar.Fallback />
                </Avatar.Root>

                <p class="text-sm">{points} pts</p>
            </div>

            <div class="flex h-5 items-center space-x-4">
                <Separator orientation="vertical"/>

                <Button variant="outline" size="icon" on:click={decreasePoints}>
                    <Minus />
                </Button>

                <Button variant="outline" size="icon" on:click={increasePoints}>
                    <Plus />
                </Button>
            </div>
        </div>
    </Card.Content>
</Card.Root>