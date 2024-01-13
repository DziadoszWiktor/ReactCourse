import React, {useState} from 'react'
import "./TaskCard.css";
import Tag from './Tag'

import Delete from "../assets/delete.png"

export const TaskCard = ({title, tags, handleDelete, index}) => {
  return (
    <article className='task_card'>
        <p className='task_text'>{title}</p>
        <div  className='task_card_bottom_line'>
            <div taks_card_tags>
              {
                tags.map((tag, index) => <Tag key={index} tagName={tag} selected />)
              }
            </div>
            <div className='task_delete'>
                <img src={Delete} className="delete_icon" alt="" onClick={() => handleDelete(index)} />
            </div>
        </div>
    </article>
  )
}
