import { useEffect,useState } from "react";

export default function ScrollProgress(){

const [scroll,setScroll]=useState(0);

useEffect(()=>{

const updateScroll=()=>{

const current=

window.scrollY/

(document.body.scrollHeight-
window.innerHeight);

setScroll(current*100);

};

window.addEventListener(
"scroll",
updateScroll
);

return()=>{

window.removeEventListener(
"scroll",
updateScroll
);

};

},[]);

return(

<div

className="
fixed
top-0
left-0
h-1
z-[999]"

style={{
width:`${scroll}%`,
background:"#D4AF37"
}}

/>

)

}