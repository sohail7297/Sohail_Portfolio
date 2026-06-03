import { motion }
from "framer-motion";

const education = [

{
year:"2021",
school:"Kerala Public School, Mango",
details:"ICSE - 73%"
},

{
year:"2023",
school:"Motilal Nehru Public School",
details:"12th Boards - 73.1%"
},

{
year:"2023-2027",
school:"ARKA JAIN University",
details:"B.Tech CSE - CGPA 8.07"
}

];

export default function Education(){

return(

<section

id="education"

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
mb-16
text-center">

Education

</h2>

<div
className="
relative
border-l-4
border-yellow-600
ml-6">

{
education.map((item,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.6,
delay:index*0.2
}}

className="
mb-12
ml-10">

<div
className="
absolute
w-5
h-5
bg-yellow-500
rounded-full
-ml-[52px]
mt-2"/>

<h3
className="
text-2xl
font-bold">

{item.school}

</h3>

<p
className="
gold-text">

{item.year}

</p>

<p
className="
text-gray-400">

{item.details}

</p>

</motion.div>

))
}

</div>

</section>

)

}