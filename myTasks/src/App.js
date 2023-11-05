import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TaskItem from './components/TaskItem'
import TagItem from './components/TagItem'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {tasksList: [], task: '', tag: 'HEALTH', activeTag: undefined}

  onSubmitForm = event => {
    const {tasksList, task, tag} = this.state
    event.preventDefault()
    const newTask = {id: uuidv4(), tag, task}
    const updatedTasksList = [...tasksList, newTask]
    this.setState({
      tasksList: updatedTasksList,
      task: '',
      tag: 'Health',
    })
  }

  onClickTag = tagId => {
    this.setState({
      activeTag: tagId,
    })
  }

  onChangeTaskInput = event => {
    this.setState({task: event.target.value})
  }

  onChangeTagOption = event => {
    this.setState({tag: event.target.value})
  }

  renderTasksList() {
    const {tasksList, activeTag} = this.state
    console.log(tasksList)
    console.log(activeTag)
    if (tasksList.length > 0) {
      if (activeTag !== undefined) {
        const selectedTasks = tasksList.filter(
          eachTask => eachTask.tag === activeTag,
        )
        return (
          <ul className="tasks_list">
            {selectedTasks.map(eachTask => (
              <TaskItem
                key={eachTask.id}
                task={eachTask.task}
                tag={eachTask.tag}
              />
            ))}
          </ul>
        )
      }
      return (
        <ul className="tasks_list">
          {tasksList.map(eachTask => (
            <TaskItem
              key={eachTask.id}
              task={eachTask.task}
              tag={eachTask.tag}
            />
          ))}
        </ul>
      )
    }
    return <p className="tasks-list-message">No Tasks Added Yet</p>
  }

  render() {
    const {task, tag} = this.state

    return (
      <div className="app-container">
        <div className="create-task-container">
          <h1 className="create-task-title">Create a task!</h1>
          <form id="createTaskForm" onSubmit={this.onSubmitForm}>
            <div className="form-element-container">
              <label htmlFor="taskInput" className="form-label">
                Tasks
              </label>
              <br />
              <input
                type="text"
                id="taskInput"
                placeholder="Enter the task here"
                onChange={this.onChangeTaskInput}
                value={task}
              />
            </div>
            <div className="form-element-container">
              <label htmlFor="selectTag" className="form-label">
                Tags
              </label>
              <br />
              <select id="selectTag" onChange={this.onChangeTagOption}>
                {tagsList.map(eachTag => (
                  <option
                    id={eachTag.optionId}
                    value={eachTag.optionId}
                    key={eachTag.optionId}
                    selected={eachTag.optionId === tag}
                  >
                    {eachTag.displayText}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="form-button">
              Add Task
            </button>
          </form>
        </div>
        <div className="tasks-list-container">
          <h1 className="tasks-list-message">Tags</h1>
          <ul className="tags-list">
            {tagsList.map(eachTag => (
              <TagItem
                key={eachTag.optionId}
                tagDetails={eachTag}
                onClickTag={this.onClickTag}
              />
            ))}
          </ul>
          <h1 className="tasks-list-message">Tasks</h1>
          <div className="tasks-container">{this.renderTasksList()}</div>
        </div>
      </div>
    )
  }
}

export default App
