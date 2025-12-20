// sort() = built-in method used to sort elements of an array in place
//          sorts in lexiograpical order not alphabetical
//          lexicographical = (alphabets, numbers, symbols) as strings

let nums = [1, 4, 5, 2, 6, 7, 2, 6, 8, 9];
nums.sort();
for (const num of nums)
{
  console.log(num);
}