// function show(){
// 	var count= "";
// 	var char="ABCD01";
// 	for(i=0; i<6; i++){
// 	   var count = char[Math.floor(Math.random()*6)];


// 	}
//      console.log(count)
// 	 document.body.style.backgroundColor= "#"+count;

// 	}


// var a="0123456789ABCD"

// var b=a[Math.floor(Math.random()*14)]

// console.log(b)


function show(){
	
	var x = Math.floor(Math.random()*380);
	var y = Math.floor(Math.random()*386);
	var z = Math.floor(Math.random()*486);
	var a = (`${x},${y},${z}`)
	 document.body.style.backgroundColor= "rgb("+ a + ")"
     console.log(`${x},${y},${z}`)
	 console.log(a);
	}