import './index.css'

const TaskItem = props => {
  const {task, tag} = props

  return (
    <li className="task">
      <p>{task}</p>
      <p className="task-tab">{tag}</p>
    </li>
  )
}

export default TaskItem
