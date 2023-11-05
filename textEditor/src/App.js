import './App.css'
import TextEditor from './components/TextEditor'

// Replace your code here
const App = () => (
  <div className="app-container">
    <div className="home-page-container">
      <div>
        <h1>Text Editor</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          alt="text editor"
          className="app-image"
        />
      </div>

      <div>
        <TextEditor />
      </div>
    </div>
  </div>
)

export default App
