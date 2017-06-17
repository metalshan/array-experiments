"use strict"

const {LIMIT} = require("../config.json");

function arrayInsertion(){
    var arr = new Array(LIMIT);
    console.time("Array insertion time");
    for(var i=0; i<LIMIT; i++){
		arr[i] = i;
	}
    console.timeEnd("Array insertion time");
}

arrayInsertion();
