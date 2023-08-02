import React from 'react'

const Sort = () => {

    
  return (
    <div>
        Sort by <input list="sort"></input>
        <datalist id="sort">
          <option value="Popular"></option>
          <option value="Price low to high"></option>
          <option value="Price high to low"></option>
        </datalist>
    </div>
  )
}

export default Sort
