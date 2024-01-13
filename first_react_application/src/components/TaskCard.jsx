import React from 'react'
import "./TaskCard.css";
import Tag from './Tag'

import Delete from "../assets/delete.png"

export const TaskCard = () => {
  return (
    <article className='task_card'>
        <p className='task_text'></p>
        <div  className='task_card_bottom_line'>
            <div taks_card_tags>
                <Tag  tagName="HTML" />
                <Tag  tagName="CSS" />
            </div>
            <div className='task_delete'>
                <img src={Delete} className="delete_icon" alt="" />
            </div>
        </div>
    </article>
  )
}
