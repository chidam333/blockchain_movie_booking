<script>
    import {ethers} from 'ethers'
import tickets from './tickets';
    $: Tickets=$tickets
</script>
<main>
    <div class="pagesc">
        <div class="head">Tickets You have </div>
        <div class="full">
        {#each Tickets as Ticket}
            <div class="block">
                <div class="run"><div class="t">Tickets</div></div>
                <div class="con"><div class="t1">Date:{Ticket.date}</div>
                <div class="t2">Time:{Ticket.time}</div>
                <div class="t3">Screen:{Ticket.screen}</div>
                <div class="t4">SeatNo:{Ticket.persons}</div></div>
            </div>
        {/each}</div>
    </div>
</main>
<style>
    .t1{
        display: block;
    }
    .con{
        margin-top: 10vh;
        letter-spacing: 0.2rem;
        margin-left: 13vw;
        color: black;
        font-family: "robo";
        position: absolute;
        top: 0%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10vw;
        row-gap: 5vw;
        font-size: 1.5rem;
    }
    .t{
        transform: rotate(-90deg);
        font-family: "roboto";
        text-align: left;
        position: absolute;
        font-size: 2.5rem;
        margin-top: 15vh;
        margin-left: 3vw ;
    }
    .block .run{

        color: wheat;
        width: 10vw;
        height: 40vh;
        background: linear-gradient(90deg,black,rgb(66, 32, 0));
    }
    .full{
        display: grid;
        grid-template-rows: (repeat(100,1fr));
        grid-row-gap: 5vh;
        place-items: center;
    }
    .block{
        position: relative;
        height: 40vh;
        width: 50vw;
        background: gainsboro;
    }
    .head{
        color: rgb(133, 83, 23);
        font-family: "roboto";
        font-size: 2rem;
        text-align: center;
        padding-top: 5vh;
        padding-bottom: 5vh;
        
    }
    .pagesc{
        margin-top: 5vh;
        position: absolute;
        top: 15vh;
        height: 60vh;
        width: 70vw;
        margin-left: 15vw;
        background: black;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
    .pagesc::-webkit-scrollbar{
        width: 10px;
    }
    .pagesc::-webkit-scrollbar-track{
        background: rgb(225, 251, 255);
    }
    .pagesc::-webkit-scrollbar-thumb{
        background: rgb(101, 66, 0);
    }
</style>