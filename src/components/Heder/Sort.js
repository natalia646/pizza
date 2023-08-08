import React from 'react'

const Sort = ({clickSort}) => {
  
  
  
  return (
    <div>
        Sort by
        <select id="sort" onChange={(event)=>clickSort(event.target.value)}>
        <option value=""></option>
          <option value="rating&order=desc">Popular</option>
          <option value='price&order=asc'>Price low to high</option>
          <option value="rait'price&order=desc'ing">Price high to low</option>
        </select>
    </div>
  )
}

export default Sort
