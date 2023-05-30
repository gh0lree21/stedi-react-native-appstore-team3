import { helloSamantha } from "../utils/helloSamantha.js";

it ("Should say Hello Samantha", ()=>{
    helloSamantha();
})

console.assert(helloSamantha() == "Hello Samantha", "It didn't say Hi! (Samantha)");