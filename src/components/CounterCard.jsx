import CountUp from "react-countup";

export default function CounterCard({
number,
title
}) {

return(

<div
className="
glass
p-8
rounded-3xl
text-center">

<h2
className="
text-5xl
font-bold
gold-text">

<CountUp
end={number}
duration={3}
/>

+

</h2>

<p
className="
mt-4
text-gray-300">

{title}

</p>

</div>

)

}