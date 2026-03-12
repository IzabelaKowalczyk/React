function cos(size,callback){  // funkcja pokazuje kiedy bedzie kompletna
    var reducer = 0;
    for (var i =1; i<size; i++){
        reducer = Math.sin (reducer *1)
    }
    callback();
}

cos(100, function() {console.log("Kompletny!");});  // 100 to czas w milisek
