import React, {useState, useEffect} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import DirectHit from "./assets/direct-hit.png"
import GlowingStar from "./assets/glowing-star.png"
import Done from "./assets/check-mark-button.png"

const oldTask = localStorage.getItem("tasks")

function App() {
    const [tasks, setTask] = useState(JSON.parse(oldTask) || []);

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const handleDelete = (taskIndex) => {
      const newTasks = tasks.filter((task, index) => index !== taskIndex)
      setTask(newTasks)
    }

    return (
      <div className='app'>
        <h1 className='app_title'>Kanban Table</h1>
        <TaskForm setTask={setTask} />
        <main className="app_main">
          <TaskColumn columnName="Backlog" iconPath={GlowingStar} tasks={tasks} status="backlog" handleDelete={handleDelete} />
          <TaskColumn columnName="Analysis" iconPath={GlowingStar} tasks={tasks} status="analysis" handleDelete={handleDelete} />
          <TaskColumn columnName="Doing" iconPath={DirectHit} tasks={tasks} status="doing" handleDelete={handleDelete} />
          <TaskColumn columnName="Tests" iconPath={DirectHit} tasks={tasks} status="tests" handleDelete={handleDelete} />
          <TaskColumn columnName="Done" iconPath={Done} tasks={tasks} status="done" handleDelete={handleDelete} />
        </main>
      </div>
    )
}

export default App