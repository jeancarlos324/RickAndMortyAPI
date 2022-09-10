import React from 'react'

const ChipCharacter = ({title,content,className}) => {
  return (
    <div className={`${className}`}>
        <h3>{title}</h3>
        <span>{content}</span>
    </div>
  )
}

export default ChipCharacter