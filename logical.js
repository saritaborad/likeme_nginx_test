// get unique array from two array
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [2, 4, 7, 4];

let combinedSet = new Set([...arr1, ...arr2]);
console.log(Array.from(combinedSet));
// output:- [ 1, 2, 3, 4, 5, 6, 7]

//  if input is {a:1,b:2,c:3} then output should be {a:3,b:6,c:9}

let input = { a: 1, b: 2, c: 3 };

//  1)
for (key in input) {
 input[key] = input[key] * 3;
}

// 2)
Object.keys(input).forEach((key) => {
 input[key] = input[key] * 3;
});

// 3)
// Object.entries(input) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
// [key,value] is array destructuring returns a, b, c in key and 1,2,3 in value
Object.entries(input).forEach(([key, value]) => {
 input[key] = value * 3;
});

// 4)
Object.entries(input).map(([key, value]) => [key, value * 3]); // returns [ [ 'a', 3 ], [ 'b', 6 ], [ 'c', 9 ] ]
Object.fromEntries(Object.entries(input)); // return { a: 1, b: 2, c: 3 } from [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
Object.fromEntries(Object.entries(input).map(([key, value]) => [key, value * 3])); // returns { a: 3, b: 6, c: 9 }

// 5)
Object.entries(input).map(([key, value]) => {
 input[key] = value * 3;
});

console.log(input);

// ------------------------------------------------------------
// if input is array of integer return even number from array
let arr = [1, 2, 3, 4, 5, 6];

// 1)
let newArr1 = arr.map((item) => {
 if (item % 2 == 0) {
  return item;
 }
});
//output:-  [ undefined, 2, undefined, 4, undefined, 6, undefined ]

// 2)
let newArr2 = arr.filter((item) => item % 2 === 0);
console.log(newArr2); //output:- [ 2, 4, 6 ]

let arr3 = [{ name: "sarita" }, { name: "riddhi" }, { name: "kiya" }];
let arr4 = [{ name: "sarita" }, { name: "jiya" }];

// Combine both arrays
let combinedArray = [...arr3, ...arr4];

// Create a Set to store unique values based on the 'name' property
let uniqueSet = new Set(combinedArray.map((item) => item.name));

// Convert the Set back to an array
let uniqueArray = [...uniqueSet].map((name) => ({ name }));

console.log(uniqueArray);

// *1****
// **1***
// ***1**
// ****1*

let str = "";
let n = 4;
for (i = 1; i <= n; i++) {
 for (j = 1; j <= n + 1; j++) {
  if (j == i + 1) {
   str += "1";
  }
  str += "*";
 }
 str += "\n";
}
console.log(str);
