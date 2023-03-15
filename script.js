 integers = [2,4,6,8,10,7,2,5,2,3,2,1]
 function removeDuplicates(array){
        let uniqueArray = [];
        
        // Loop through array values
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    
    
    console.log(removeDuplicates(integers));



   
