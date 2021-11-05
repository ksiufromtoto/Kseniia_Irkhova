// Task 1
function filter_list (arr) {
	let new_arr = [];
	for (let i of arr) {
		if ( typeof i == 'number' ) {
			new_arr.push(i);
		}
	}
	return new_arr;
}

// Task 2
function first_non_repeating_letter(s) {
  let str, arr=[];
  for (let i=0; i<s.length; i++) {
    str = new RegExp(s[i], "gi");
    arr = s.match(str);
    if (arr.length == 1) {
      return arr[0];
    }
  }
  return "";
}

// Task 3
function digital_root(n){
  let rem=0, sum = 0;
  while ( (n%10) != n ){
    while ( n!= 0 ){
      rem = n%10;
      sum += rem;
      n = (n-rem)/10;
    }
    n = sum;
    sum = 0;
  }
  return n;
}

// Task 4
let arr = [1, 3, 6, 2, 2, 0, 4, 5], target = 5, count = 0;
for (let i=0; i<arr.length; i++){
	for (let j=i+1; j<arr.length; j++){
		if (arr[i] + arr[j] == target) {
			count++;
		}
	}
}

// Task 5
let str = "Fred:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
str = str.toUpperCase();
let arr = str.split(';'), temp;
for (let i=0; i<arr.length; i++){
	arr[i] = arr[i].split(":");
	temp=arr[i][0];
	arr[i][0] = arr[i][1];
	arr[i][1] = temp;
}
arr.sort(function (a, b){
	if( a[0] > b[0] ){
		return 1;
	} 
	else if(a[0] < b[0]){
		return -1;
	} else{
		if( a[1] > b[1]) {
			return 1;
		} else if( a[1] < b[1]) {
			return -1;
		} else {
			return 0;
		}
	}
});
for (let i=0; i<arr.length; i++){
	arr[i] = arr[i].join(", ");
}
arr = arr.join(") (");
str = "(" + arr + ")";		
