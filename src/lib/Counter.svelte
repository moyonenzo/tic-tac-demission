<script lang="ts">
    export let date: Date;

    let days: number;
    let hours: number;
    let minutes: number;
    let seconds: number;

    function calculateRemaining() {
        const now = new Date();
        const sec = (date - now) / 1000;
        const n   = 24 * 3600;

        days = Math.floor (sec / n);
        hours = Math.floor ((sec - (days * n)) / 3600);
        minutes = Math.floor ((sec - ((days * n + hours * 3600))) / 60);
        seconds = Math.floor (sec - ((days * n + hours * 3600 + minutes * 60)));

        setTimeout(calculateRemaining, 1000)
    }

    calculateRemaining();
</script>

<p>
    {days < 10 ? '0' + days : days} :
    {hours < 10 ? '0' + hours : hours} :
    {minutes < 10 ? '0' + minutes : minutes} :
    {seconds < 10 ? '0' + seconds : seconds}
</p>