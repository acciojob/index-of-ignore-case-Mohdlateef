function indexOfIgnoreCase(s1, s2) {
  // write your code here


	
	
	let str1=s1.toLowerCase();
let str=s2.toLowerCase();
	
	// alert(str1);
	// alert(str);
	let index=str1.indexOf(str);
	return index;

}


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
