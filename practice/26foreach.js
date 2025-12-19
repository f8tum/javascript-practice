// foreach() = method used to iterare over elements
//             of an array and apply a callback

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array)
{
  array[index] = element * 2;
}

function display (element)
{
  console.log(element);
}