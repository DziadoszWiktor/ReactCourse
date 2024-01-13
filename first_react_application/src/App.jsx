import React from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import DirectHit from "./assets/direct-hit.png"
import GlowingStar from "./assets/glowing-star.png"
import Done from "./assets/check-mark-button.png"


function App() {
  return (
    <div className='app'>
      <TaskForm/>
      <main className="app_main">
        <TaskColumn columnName="Backlog" iconPath={GlowingStar} />
        <TaskColumn columnName="Analysis" iconPath={GlowingStar} />
        <TaskColumn columnName="Doing" iconPath={DirectHit} />
        <TaskColumn columnName="Tests" iconPath={DirectHit} />
        <TaskColumn columnName="Done" iconPath={Done} />
      </main>
    </div>
  )
}

export default App