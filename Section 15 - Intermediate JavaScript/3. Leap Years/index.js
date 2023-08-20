function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here. 
        if(!(year % 4)){
            if(!(year % 100)){
                if(!(year % 400)){
                    return "Leap year."
                }
                else {
                    return "Not leap year."
                }
            }
            else {
                return "Leap year."
            }
        } 
        else {
            return "Not leap year.";
        }
        
    /**************Don't change the code below****************/    
    }