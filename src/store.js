import { writable } from "svelte/store";
var moviestore = writable({date:'',time:'',screen:0,noseat:0})
export default moviestore;
