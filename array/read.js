"use strict"

const {LIMIT} = require("../config.json");

function arrayReading(){
    var arr = new Array(LIMIT);
    for(var i=0; i<LIMIT; i++){
		arr[i] = i;
	}
    var indexToRead = Math.floor(LIMIT/2);
    
    console.time("Array reading time");
    var p = arr[indexToRead];
    console.timeEnd("Array reading time");
}

arrayReading();
