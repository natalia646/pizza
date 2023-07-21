import React from 'react'

const Sort = () => {

    
  return (
    <div>
        Sort <input list="sort"></input>
        <datalist id="sort">
          <option value="Popular"></option>
          <option value="From the greetings"></option>
          <option value="From cheaper"></option>
        </datalist>
    </div>
  )
}

export default Sort
