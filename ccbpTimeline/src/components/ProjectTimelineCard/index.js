// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    projectUrl,
    description,
    duration,
    imageUrl,
  } = projectDetails

  return (
    <div>
      <img src={imageUrl} alt="project" className="project-image" />

      <p>
        <AiFillCalendar color="#171f46" />
        {duration}
      </p>
      <h1>{projectTitle}</h1>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
