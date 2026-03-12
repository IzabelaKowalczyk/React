let val1 =1;
val1 = 2;
if(true){
    var val2 = 3;// uwaga globalny zakres
    val2 = 4;
}

console.log(val1)
console.log(val2)