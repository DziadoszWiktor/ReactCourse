import React from 'react'
import "./TaskColumn.css";

import { TaskCard } from './TaskCard';

const TaskColumn = ({columnName, iconPath, tasks, status, handleDelete}) => {
    return (
        <section className='task_column'>
            <h2 className="task_column_heading">
                <img className="task_column_icon" src={iconPath} />
                {columnName}
            </h2>
            {
                tasks.map((task, index) => 
                    task.status === status && 
                    <TaskCard 
                        key={index} 
                        title={task.task}
                        description={task.task_desc}
                        tags={task.tags}
                        handleDelete={handleDelete}
                        index={index}
                    />
                )
            }
        </section>
    )
}

export default TaskColumn