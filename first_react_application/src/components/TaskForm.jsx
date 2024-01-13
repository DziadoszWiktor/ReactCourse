import React from 'react'

import './TaskForm.css';
import Tag from './Tag';

const TaskForm = () => {
  return (
    <header className='app_header'>
        <form action="">
            <input type="text" className='task_input' placeholder='Enter your task' />
            <div className='task_form_bottom_line'>
                <div>
                    <Tag  tagName="HTML" />
                    <Tag  tagName="CSS" />
                    <Tag  tagName="JS" />
                    <Tag  tagName="React" />
                </div>
                <div>
                    <select className='task_status'>
                        <option value="backlog">Backlog</option>
                        <option value="analysis">Analysis</option>
                        <option value="doing">Doing</option>
                        <option value="tests">Tests</option>
                        <option value="done">Done</option>
                    </select>
                    <button type='submit' className='task_submit'>Add task</button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForm