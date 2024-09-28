const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
let plants = 20;
const plantArea = 0.8;
const startArea = plants * plantArea;

let weeks = 1.5;
let totalPlants = 20 * 2**(weeks); 

let newArea = totalPlants * 0.8;
let pruned = area * 0.8; 
let monitored = area * 0.50; 

if (newArea > pruned) {
  console.log(`You have ${totalPlants} plants.`)
  console.log(`Your plants should be pruned.`)
 } else if (newArea < monitored) {
    console.log(`You have ${totalPlants} plants.`)
    console.log(`You should plant another plant.`)
} else if (monitored <= newArea <= pruned ){
  console.log(`You have ${totalPlants} plants.`)
  console.log(`Your plant should be monitored.`)
} 


