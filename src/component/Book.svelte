<script>
    import Timing from "./Timing.svelte"
    import Noseat from "./Noseat.svelte"
    import Pay from "./Pay.svelte"
    import Ticket from "./Ticket.svelte"
    let navitems=['timing','seat selection','pay','ticket']
    $: done=['timing'];
    $: step=0;
    const stepchange =(e) => {
        step=e.detail
        done=[...done,navitems[step]]
        console.log(done)

    }
</script>
<main>
    <div class="prg">
    {#each navitems as b,i}
        {#if b==done[i]}
            <div class="fblock"></div>
        {:else}
            <div class="block"></div>
        {/if}
    {/each}
    </div>
    {#if step==0}
        <Timing {step} on:dis={stepchange}/>
    {:else if step==1}
        <Noseat {step} on:dis1={stepchange}/>
    {:else if step==2}
        <Pay on:dis2={stepchange} />
    {:else if step==3}
        <Ticket/>
    {/if}
</main>
<style>
    .prg{
        margin: 0vh 0% 2vw 5vw ;
        width: 90vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-column-gap: 1vw;
    }
    .prg .block{
        background: gainsboro;
        margin-top: 5vh;
        height: 1vh;
    }
    .prg .fblock{
        background: green;
        margin-top: 5vh;
        height: 1vh;
    }
    main{
        background: rgb(233, 193, 72);
        height:75vh;
        width: 100vw;
    }
</style>