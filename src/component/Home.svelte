<script>
import { each, element } from "svelte/internal";
    import {createEventDispatcher} from "svelte"
    let dispatch=createEventDispatcher()
    $: i=0;
    export let state =1;
    let carele=[{t:'RRR',img:'https://images.livemint.com/img/2022/01/01/1600x900/1500x500_1641040531586_1641040545205.jpg'},{t:'KGF 2',img:'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/KGF-chapter2.jpg?itok=wpYqmIzZ'},{t:'Pushpa : Rise',img:'https://industryhit.com/t/wp-content/uploads/2021/12/Pushpa-Movie-Review.jpg'}]
    let posters=[{t:'joker',img:'https://images.unsplash.com/photo-1620510625142-b45cbb784397',desc:'An intresting thriller on how society changes a person'},{t:'Aquaman',img:'https://images.unsplash.com/photo-1583514735580-650d4a4ef5de',desc:'An starter dc movie of a superhero'},{t:'ZNMD',img:'https://flxt.tmsimg.com/assets/p8424501_p_v12_ae.jpg',desc:'A fun adventure reunion movie in hindi'},{t:'asuran',img:'src/assets/pasu.jpg',desc:'An intresting thriller of a dad and his child trying to escape after murder'}]
    const left = ()=>{
        console.log(i)
        if(i==0){
            console.log("not present")
        }
        else{
            i-=1;
        }
    }
    const right = ()=>{
        console.log(i)
        if(i==2){
            console.log("maximum limit reached")
        }
        else{
            i+=1;
        }
    }
    const statechange = () =>{
        dispatch('onstatechange',2)
    }
</script>
<main>
    <div class="car">
            <div class="black"></div>
            <div class="left" on:click={left}><span>&#60;</span></div>
            <div class="right" on:click={right}><span>&#62;</span></div>
            <img src={carele[i].img} alt={carele[i].t}/>
            <a href="#" on:click={statechange}>BOOK NOW</a>
    </div>
    <div class="rec">
        <div class="head">Recommended movies</div>
        <div class="pos">
        {#each posters as p}
            <a href="" on:click|preventDefault={statechange}><img src={p.img} alt={p.t}/><div class="pb"><p>{p.desc}</p></div></a>

        {/each}
        </div>
    </div>
    <div class="expbtn"><a href="">Explore more</a></div>
</main>
<style>
    .pb p{
        padding-top: 16vh;
    }
    .pb:hover{
        opacity: 1;
    }
    .pb{
        opacity: 0;
        color: wheat;
        font-size: 3rem;
        font-family: "roboto";
        position: absolute;
        top: 88.5vh;
        width: 20vw;
        height: 60vh;
        background: rgba(0, 0, 0,0.5);
    }
    .pos{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin-left: 5vw;
        margin-top: 5vh;
    }
    .pos img{
        position: relative;
        width: 20vw;
        height: 60vh;
    }
    .head{
        font-family: "ele";
        font-weight: 900;
        font-size: 3rem;
        word-spacing: 2rem;
        padding: 5vh 5vh 0vw 5vw;
    }
    .car a,.expbtn a{
        position: absolute;
        top: 50vh;
        left: 46vw;
        font-family: "roboto";
        text-decoration:none;
        color: whitesmoke;
        padding: 1% 2% 1% 2%;
        background: green;
        border: black 3px solid;
        border-radius: 14px;
    }
    .expbtn a{
        margin-top: 2vh;
    }
    .expbtn{
        margin-top: 15vh;
    }
    .expbtn a{
        top: 150vh;
    }
    .left,.right{
        cursor: pointer;
        color: white;
        font-size: 4rem;
        font-weight: 900;
        position: absolute;
        top: 32vh;
        background: black;
        width: 100px;
        height: 100px;
    }
    .black{
        position: absolute;
        top: 14vh;
        width: 90vw;
        height: 60vh;
        background: rgba(0, 0, 0,0.3);
    }
    .right{
        right: 5vw;
    }
    .left span,.right span{
        padding: 0vh 0vh 0vw 2vw;
    }
    .car{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 5vw;
        overflow-x: hidden;
        margin: 5vh 0vh 0vw 5vw;
    }
    .car img{
        
        width: 90vw;
        height: 60vh;
    }
</style>
