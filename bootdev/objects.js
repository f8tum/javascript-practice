// objects are key value pairs that have values and methods
// properties are accessed using . notation or [] notation

const company = 
{
  employees: 
  {
    ceo: 
    {
      name: "Jensen",
      salary: 0,
    },

    engineers: 
    {
      name: "Marie",
      salary: 225000,
    }
  }
};

//to access ceo name
console.log(`\nThe CEO of NVIDIA is ${company.employees.ceo.name} Huang and he takes a salary of $${company.employees.ceo.salary}
and he is ${company.employees.ceo?.age} Years old\n`);

// ?. is option chaining
// if that property does not exist then ?. return undefined 
// it does not throw an error


/* Methods */ 
// functions used inside objects are called methods

let tree = {
  height: 256,
  color: "green",
  cut: function() {
    this.height /= 2;
  } 
};

console.log(`The height of this tree is ${tree.height}m`);