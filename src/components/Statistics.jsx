import CounterCard from "./CounterCard";

export default function Statistics(){

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

Achievements

</h2>

<div
className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8">

<CounterCard
number={200}
title="LeetCode Problems"
/>

<CounterCard
number={100}
title="GeeksforGeeks Problems"
/>

<CounterCard
number={3}
title="Internships"
/>

<CounterCard
number={6}
title="Projects"
/>

</div>

</section>

)

}