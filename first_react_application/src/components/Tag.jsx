import React from 'react'

import './Tag.css';

const Tag = ({tagName, selectTag, selected}) => {
    const tagStyle = {
      HTML : {backgroundColor: "yellow"},
      CSS : {backgroundColor: "green"},
      JS : {backgroundColor: "purple"},
      React : {backgroundColor: "orange"},
      default : {backgroundColor: "grey"}
    }
    return (
      <button
        type='button' 
        className='tag' 
        onClick={() => selectTag(tagName)}
        style={selected ? tagStyle[tagName] : tagStyle.default}
      >
        {tagName}
      </button>
    )
}

export default Tag