import {Link} from 'react-router-dom'
import './index.css'

const CourseCard = props => {
  const {courseDetails} = props
  const {name, logoUrl, id} = courseDetails

  return (
    <Link to={`courses/${id}`}>
      <li className="course-card">
        <img src={logoUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default CourseCard
