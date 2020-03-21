module.exports = function towelSort (matrix) {
    if(!Array.isArray(matrix)){return []}
  var recal = [];
  var dirORrev = true;
  for(var i = 0 ; i < matrix.length ; i++){
    if(dirORrev){
      for(var k = 0; k < matrix[i].length ; k++){
        recal.push(matrix[i][k])
      }
      dirORrev = false;
    }
    else{for(var k = matrix[i].length - 1; k >= 0; k--){
      recal.push(matrix[i][k]);
       }
       dirORrev = true;
    }
    
  }
  return recal;
}
