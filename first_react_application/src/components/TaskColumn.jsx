import React from 'react'
import "./TaskColumn.css";

import { TaskCard } from './TaskCard';

const TaskColumn = ({columnName, iconPath}) => {
    return (
        <section className='task_column'>
            <h2 className="task_column_heading">
                <img className="task_column_icon" src={iconPath} />
                {columnName}
            </h2>
            <TaskCard />
        </section>
    )
}

export default TaskColumn