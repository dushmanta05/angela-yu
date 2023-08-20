var num = 1
while(num < 100){
    var remain = 100-num
    console.log(`${remain} bottles of beer on the wall, ${remain} bottles of beer.
Take one down and pass it around, ${remain-1} bottles of beer on the wall.`)
    num++;
}