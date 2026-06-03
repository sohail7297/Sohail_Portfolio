import { motion } from "framer-motion";

const achievements=[

"200+ Problems Solved on LeetCode",

"100+ Problems Solved on GeeksforGeeks",

"AI Chatbot using IBM Watson Assistant",

"House Price Prediction using Machine Learning",

"PaisaPanel Finance Management System"

];

export default function Achievements(){

return(

<section
className="
py-24
px-8
max-w-6xl
mx-auto">

<h2
className="
text-5xl
font-bold
gold-text
text-center
mb-16">

Highlights

</h2>

<div
className="
grid
md:grid-cols-2
gap-8">

{
achievements.map((item,index)=>(

<motion.div

key={index}

whileHover={{
scale:1.05
}}

className="
glass
rounded-3xl
p-8">

🏆 {item}

</motion.div>

))
}

</div>

</section>

)

}