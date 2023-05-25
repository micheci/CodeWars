// Calculate average
function findAverage(array) {
    if(array.length==0){
      return 0
    }
    const q=array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0)
    return (q/array.length)
    
  }