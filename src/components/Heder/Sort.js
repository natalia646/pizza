import React from 'react'

const Sort = ({clickSort, clickOrder}) => {
  
  
  
  return (
    <div>
        Sort by
        <select id="sort" onChange={(event)=>clickSort(event.target.value)}>
        <option value=""></option>
          <option value="rating">Popular</option>
          <option value='price'>Price</option>
          <option value='title'>ABC</option>
        </select>

        from
        <select id="order" onChange={(event)=>clickOrder(event.target.value)}>
        <option value=""></option>
          <option value="desc">high to low</option>
          <option value='asc'>low to high</option>
        </select>
    </div>
  )
}

export default Sort
