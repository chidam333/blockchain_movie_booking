import { writable } from "svelte/store";
var tickets = writable([{date:'',time:'',screen:0,persons:0,booker:'',sno:0},])
export default tickets;
