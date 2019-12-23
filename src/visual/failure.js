import React from 'react';
import './failure.css';
const waterCycles = [
"The water cycle consists of three phenomena – evaporation, precipitation, and collection- which are the three phenomena that make up what is known as “the water cycle.",
"Evaporation, the first of these phenomena, is the process of water turning into vapor and eventually forming clouds, such as those found in cloudy skies, or on cloudy days, or even cloudy nights.",
"These clouds are formed by a phenomenon known as “evaporation,” which is the first of three phenomena that make up the water cycle. Evaporation, the first of these three, is simply a term for a process by which water turns into vapor and eventually forms clouds.",
"The name for the process by which clouds are formed – by water, which turns into vapor and becomes part of the formation known as “clouds” – is “evaporation,” the first phenomenon in the three phenomena that make up the cycle of water, otherwise known as “the water cycle.."
]
function Failure() {
  console.log( waterCycles[Math.random() * 4])
  return (
    <div className="failure">
    {waterCycles[Math.floor(Math.random() * 4)]}
    </div>
  );
}

export default Failure;

