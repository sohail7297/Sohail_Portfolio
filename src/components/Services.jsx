import { motion } from "framer-motion";

const services=[

{
title:"Data Analytics",
description:
"Transforming raw data into meaningful insights using analytics and visualization."
},

{
title:"Graphic Design",
description:
"Creating professional social media creatives, posters and branding assets."
},

{
title:"Web Development",
description:
"Developing modern responsive web applications using React and modern technologies."
},

{
title:"Dashboard Development",
description:
"Building interactive dashboards using Power BI, Streamlit and analytics tools."
}

];

export default function Services(){

return(

<section
className="
py-24
px-8
max-w-7xl
mx-auto">

<h2
className="
text-center
text-5xl
font-bold
gold-text
mb-16">

Services

</h2>

<div
className="
grid
md:grid-cols-2
gap-8">

{
services.map((service,index)=>(

<motion.div

key={index}

whileHover={{
scale:1.05
}}

className="
glass
rounded-3xl
p-8">

<h3
className="
text-2xl
font-bold
mb-4">

{service.title}

</h3>

<p
className="
text-gray-300">

{service.description}

</p>

</motion.div>

))
}

</div>

</section>

)

}