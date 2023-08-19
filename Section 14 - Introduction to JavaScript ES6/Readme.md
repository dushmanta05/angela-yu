### Important Links

- [Karel IDE](https://stanford.edu/~cpiech/karel/ide.html)

Solution to the challenge:
- Move to the top
    function main(){
       //your code here
       moveFourTimes();
       turnLeft();
       moveFourTimes();
       turnRight();
    }
    
    function moveFourTimes(){
       move();
       move();
       move();
       move();
    }

- Put Beeper Diagonally
    function main(){
       //your code here
       putBeeper();
       diagonalBeeper();
       diagonalBeeper();
       diagonalBeeper();
       diagonalBeeper();
    }
    
    function diagonalBeeper(){
       move();
       turnLeft();
       move();
       putBeeper();
       turnRight();
    }

- Make a chess board
    function main(){
       //your code here
       rowBeeper();
       left();
       rowBeeper();
       right();
       rowBeeper();
       left();
       rowBeeper();
       right();
       rowBeeper();
    
    }
    
    function rowBeeper(){
       putBeeper();
       move();
       move();
       putBeeper();
       move();
       move();
       putBeeper();
       
    }
    
    function left(){
       turnLeft();
       move();
       turnLeft();
    }
    
    function right(){
       turnRight();
       move();
       turnRight();
    }