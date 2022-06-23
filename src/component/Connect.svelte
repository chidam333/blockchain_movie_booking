<script>
    import { createEventDispatcher } from 'svelte';
    import {ethers} from 'ethers'
    $: value=0;
    export let state;
    let dispatch=createEventDispatcher()
    const statechange = async()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner();
        dispatch('statechange',1)
        state=1
    }
    const client = async ()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner();
        var address = "0xD84e65c9347E580c6786d43485025A83BB9CE9a1"
    let ABI = [
	{
		"inputs": [],
		"name": "allocate_rewards",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_persons",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_time",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "_screen",
				"type": "int256"
			}
		],
		"name": "book_ticket",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "get_tickets",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "sno",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "booker",
						"type": "address"
					},
					{
						"internalType": "int256",
						"name": "persons",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "time",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "screen",
						"type": "int256"
					}
				],
				"internalType": "struct movie.booking[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
    let contract = new ethers.Contract(address, ABI, signer)
    let tx = await contract.allocate_rewards({value:ethers.utils.parseEther(String(value))})
    }
</script>
<main>

    <div class="black"></div>
    <div class="text">Movieso</div>
    <div class="rig"></div>
    <div class="btncon"><a href="#" on:click={statechange}>Connect Wallet</a></div>
    <div class="hmm"><div class="btn"><a href="#" on:click={client}>Connect Wallet as Allocator</a><input type="text" bind:value={value}></div></div>
</main>
<style>
main{
    background: black;
}
.hmm{
    top:60vh ;
    position: absolute;
    left: 60vw;
    width: 40vw;
    display: grid;
    place-items: center;
}
.btn a{
    font-family: "Merriweather";
    text-decoration: none;
    color: aliceblue;
}
.btn a:hover{
    color: rgb(122, 255, 255);
    text-decoration:underline;
}
.btncon{
    cursor: pointer;
    position: absolute;
    top: 50vh;
    right: 15vw;
    background: rgb(237, 188, 97);
    font-family: "roboto";
    border-radius: 17px;
    border: white solid 2px;
    padding: 1% 1.5% 1% 1.5%;
}
.btncon a{
    text-decoration: none;
    color: black;
}
.img{
    position: absolute;
    top: -5vh;
    height: 100vh;
    width:60vw;
    overflow: hidden;
}
.text{
    position: absolute;
    font-family: "Samarkan";
    color: wheat;
    font-size: 3.5rem;
    top: 50vh;
    left: 25vw;
}
.black{
    position: absolute;
    top: 0px;
    width: 60vw;
    height: 100vh;
    background: rgb(0, 0, 0,1);
}
.rig{
    position: absolute;
    top: 0%;
    right: 0%;
    background: black;
    height: 100vh;
    width: 40vw;
}
</style>