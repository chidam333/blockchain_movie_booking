<script>
    import shi from "../assets/logo.png"
    import { createEventDispatcher } from "svelte";
    import {ethers} from 'ethers'
import tickets from "./tickets";
    let dispatch=createEventDispatcher()
    const showticket = async ()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        let accounts = await provider.send("eth_requestAccounts", [])
        let account = accounts[0]
    const signer = provider.getSigner()
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
    let tx = await contract.get_tickets()
    let found_tickets = []
    for(let i=0; i<tx.length; i++){
        if(tx[i].booker.toUpperCase() == account.toUpperCase()){
            found_tickets.push(tx[i])
        }
    }
	console.log(found_tickets)
		tickets.set(found_tickets)
        dispatch('ticket',10)
    }
</script>
<main>
    <div class="full">
        <div class="img"><img src="src/assets/logo.png" alt=""></div>
        <div class="title">MovieSO</div>
        <div class="account" on:click={showticket}><img src="src/assets/acc.png" alt=""></div>
    </div>
</main>
<style>
    .img{
        width: 64px;
        margin: 0vh 0vh 0vw 2vw;
        padding-top: 0.5vh; 
    }
    .account{cursor: pointer;

        padding-top: 1vh; 
        position: absolute;
        top: 0%;
        width: 6.4vw;
        right: 2vw;
        
    }
    .title{
        position: absolute;
        top: 1vh;
        font-family: "Samarkan";
        font-size: 3rem;

        width: 100vw;
        text-align: center;
    }
    .full{
        overflow-x: hidden;
        height: 9vh;
        width: 100vw;
        background: rgb(131, 76, 0);
    }
</style>