function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        if(n === 1){
            arr = [0]
        }
        else if(n === 2){
            arr = [0, 1]
        }
        else{
            var arr = [0, 1]
            for(var i = 2; i < n; i++){
                length = arr.length
                arr.push(arr[length-1] + arr[length-2])
            }
        }
        return arr;
     
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    