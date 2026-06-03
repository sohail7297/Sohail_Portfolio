import { useEffect,useState } from "react";

export default function BackToTop(){

const [visible,setVisible]
=
useState(false);

useEffect(()=>{

const toggle=()=>{

if(window.scrollY>300){

setVisible(true);

}else{

setVisible(false);

}

};

window.addEventListener(
"scroll",
toggle
);

return()=>{

window.removeEventListener(
"scroll",
toggle
);

};

},[]);

return(

visible && (

<button

onClick={()=>
window.scrollTo({

top:0,
behavior:"smooth"

})
}

className="
fixed
bottom-24
right-6
w-12
h-12
rounded-full
gradient-gold
text-black
font-bold
z-50">

↑

</button>

)

)

}