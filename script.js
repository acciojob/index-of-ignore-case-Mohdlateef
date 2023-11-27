function indexOfIgnoreCase(s1, s2) {
  // write your code here

	
	
	s1.toLowerCase();
let str=s2.toLowerCase();
	
	// alert(s1);
	// alert(str);
	let index=s1.indexOf(str);
	return index;

}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
