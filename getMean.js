function getAverage(marks){

    // calculates total number of marks
    var total = 0;
    for(var i = 0; i < marks.length; i++){
      total += marks[i];
    }
    
    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length);
  }
  