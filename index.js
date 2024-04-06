const batteryBatches = [4, 5, 3, 4, 6, 9]; 

const totalBatteries = batteryBatches.reduce((total, batch) => {
  return total + batch;
}, 0);

console.log(totalBatteries); 
