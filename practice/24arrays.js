let arr = [10, 20, 30];  // Initial array

// 1. .length - Get current size
console.log(arr.length);

// 2. .push() - Add to END
arr.push(40, 50);
console.log(arr);

// 3. .pop() - Remove from END
let endItem = arr.pop();
console.log(arr);

// 4. .unshift() - Add to START
arr.unshift(1, 2);
console.log(arr);

// 5. .shift() - Remove from START
arr.shift();
console.log(arr);  