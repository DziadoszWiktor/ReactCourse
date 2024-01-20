import React, {useState} from 'react'
import './TaskForm.css';
import Tag from './Tag';

const TaskForm = ({setTask}) => {

    const [taskData, setTaskData] = useState({
        task: "",
        task_desc: "",
        status: "backlog",
        tags: []
    });

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
        if (taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag);
            setTaskData(prev => {
                return {...prev, tags: filterTags}
            })
        } else {
            setTaskData(prev => {
                return {...prev, tags: [...prev.tags, tag]}
            })
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setTaskData(prev=> {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTask((prev) => {
            return [...prev, taskData];
        })
        setTaskData({
            task: "",
            task_desc: "",
            status: "backlog",
            tags: []
        })
    }
    return (
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="task"
                    value={taskData.task}
                    className='task_input' 
                    placeholder='Title' 
                    onChange={handleChange}
                />
                <textarea 
                    type="text" 
                    name="task_desc"
                    value={taskData.task_desc}
                    className='task_desc_input' 
                    placeholder='Task details...' 
                    onChange={handleChange}
                />
                <div className='task_form_bottom_line'>
                    <div>
                        <Tag  tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")} />
                        <Tag  tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
                        <Tag  tagName="JS" selectTag={selectTag} selected={checkTag("JS")} />
                        <Tag  tagName="React" selectTag={selectTag} selected={checkTag("React")} />
                    </div>
                    <div>
                        <select name="status" value={taskData.status} className='task_status' onChange={handleChange}>
                            <option value="backlog">Backlog</option>
                            <option value="analysis">Analysis</option>
                            <option value="doing">Doing</option>
                            <option value="tests">Tests</option>
                            <option value="done">Done</option>
                        </select>
                        <button type='submit' className='task_submit' class="cssbuttons-io-button">
                        Add task
                            <div class="icon">
                                <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                ></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default TaskForm