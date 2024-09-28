// Part 1 : Growing Pains
const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
let plants = 20;
const plantArea = 0.8;
const startArea = plants * plantArea;

let weeks = 2;

// the total plants are the starting plants multiplied by 2 to the power of the number of weeks is inputed
let totalPlants = 20 * 2**(weeks); 
let newArea = totalPlants * 0.8;
let pruned = area * 0.8; 
let monitored = area * 0.50; 

// Part 2: Thinking Bigger
let gardenWeeks = 10;
let gardenPlants = 100
let gardenStartArea = gardenPlants * plantArea
let totalGardenPlants = 100 * 2**(gardenWeeks);
let newGardenArea = totalGardenPlants * plantArea; 
let spaceNeeded = newGardenArea - gardenStartArea; 
// the radius is the square root of the area divided by pie 

try {
	if (newArea < area) {
		if (newArea > pruned) {
      console.log(`You have ${totalPlants} plants.`)
      console.log(`Your plants should be pruned.`)
     } else if (newArea < monitored) {
        console.log(`You have ${totalPlants} plants.`)
        console.log(`You should plant more plants.`)
    } else if (monitored <= newArea <= pruned ){
      console.log(`You have ${totalPlants} plants.`)
      console.log(`Your plants should be monitored.`)
    }  
    console.log("Beginning with 20 plants, at one week, you will have 40, taking up 32 square meters, so you should plant more plants.")
    console.log("At two weeks, you have 80 plants and you should prune your plants.")
    console.log("Lastly, at three weeks, you have 160 plants and you should prune your plants.")
	} else if (newArea > area) {
		throw "Error - There is not enough space for your plants"
	}
} catch (error) {
	console.log(error);
}
finally {
let gardenRadius = Math.sqrt(newGardenArea/PI);
console.log(`Starting with 100 plants, the radius of your garden is ${gardenRadius} meters. This is after ${gardenWeeks} weeks of growth. You now have ${totalGardenPlants} plants.`)
console.log("You will need 81,840 square meters more in order to fit 100 plants doubling in growth for 10 weeks.")
console.log("The radius of the expanded garden would be 161.4828 meters.")
}



