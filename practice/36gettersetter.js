// getter = special method that makes a property readable
// setter = special method that makes a property writeable
// Helps apply validation to properties

class Rectangle 
{
  constructor(width, height) 
  {
    this.width  = width;   
    this.height = height;  
  }

  set width(newWidth) 
  {
    if (newWidth > 0) 
      this._width = newWidth;
    else
      console.error("Width must be a positive number");
  }

  set height(newHeight) 
  {
    if (newHeight > 0)
      this._height = newHeight;
    else
      console.error("Height must be a positive number");
  }

  get width() 
  {
    return this._width;
  }

  get height() 
  {
    return this._height;
  }
}

const rectangle1 = new Rectangle(1000000, 69);
console.log(rectangle1.width);  
console.log(rectangle1.height); 