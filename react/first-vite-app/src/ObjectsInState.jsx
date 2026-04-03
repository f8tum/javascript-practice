// States can hold javascript objects
// to change them we create a new copy 
// and set the state to the new copy
// objects are mutable so state can be changed
// without the statechange method i.e: objname.propery = val
// but they should be treated as immutable to prevent weird bugs

import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
  <div className='mt-6'>
    <label className="block">
      Name:
      <input
        value={person.name}
        onChange={handleNameChange}
      />
    </label>

    <label className="block">
      Title:
      <input
        value={person.artwork.title}
        onChange={handleTitleChange}
      />
    </label>

    <label className="block">
      City:
      <input
        value={person.artwork.city}
        onChange={handleCityChange}
      />
    </label>

    <label className="block">
      Image:
      <input
        value={person.artwork.image}
        onChange={handleImageChange}
      />
    </label>

    <p>
      <i>{person.artwork.title}</i>
      {' by '}
      {person.name}
      <br />
      (located in {person.artwork.city})
    </p>

    <img 
      src={person.artwork.image} 
      alt={person.artwork.title}
    />
  </div>
  );
}
