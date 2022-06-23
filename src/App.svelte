<script>
  import Connect from "./component/Connect.svelte"
  import Home from "./component/Home.svelte"
  import Header from "./component/Header.svelte"
  import Footer from "./component/Footer.svelte"
  import Book from "./component/Book.svelte"
  import Ticket from "./component/Ticket.svelte"
  let state=0;
</script>
<main>
  {#if state == 0}
    <Connect {state} on:statechange={(e)=>{state=e.detail;if(state==1){state=1}else if(state == 10){state =10   }}}/>
  {:else}
    <Header on:ticket={()=>{state=20}}/>  
    {#if state ==1}
        <Home {state} on:onstatechange={()=>{state=2}}/>
    {:else if state ==2}
        <Book/>
    {:else if state ==20}
        <div class="hmm">
        <Ticket/>
        </div>
    {/if}
    <Footer/>
  {/if}
</main>

<style>
  .hmm{
    height: 75vh;
    width: 100vw;
    background: black;
  }
</style>
