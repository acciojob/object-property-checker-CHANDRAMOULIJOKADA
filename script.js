const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	let containsKey = 'key' in sampleObject;
	if(containsKey===true) return true;
	else false;
	}
}

// Do not change the code below
//const key = prompt("Enter Key.");
//alert(hasKey(key));
