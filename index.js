// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; 
    return Math.abs(someValue - hqLocation); 
 }
  function distanceFromHqInFeet(someValue) {
   const feetPerBlock = 264; 
        const blocks = distanceFromHqInBlocks(someValue); 
      
        return blocks * feetPerBlock; 
      }
  
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264);
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
    const distanceTravelledInFeet = Math.abs((destination - start) * 264);
  
    if (distanceTravelledInFeet <= 400) {
      return 0; // No charge for free sample
    } else if (distanceTravelledInFeet <= 2000) {
      // Calculate fare for distances between 400 and 2000 feet
      return Math.abs((distanceTravelledInFeet - 400) * 0.02);
    } else if (distanceTravelledInFeet <= 2500) {
      return 25; // Flat rate for distances over 2000 feet
    } else if (distanceTravelledInFeet > 2500) {
      return "cannot travel that far"; // Distance over 2500 feet
    }
  }