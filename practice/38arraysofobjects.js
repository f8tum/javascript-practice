const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "red", calories: 159},
                {name: "pineapple", color: "red", calories: 95}];

fruits.push({name: "grapes", color: "purple", calories: 62});

for (const fruit of fruits) 
{
  console.log(fruit);
}