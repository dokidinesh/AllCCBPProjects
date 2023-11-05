// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

const CourceTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div>
      <h1>{courseTitle}</h1>
      <p>{duration}</p>
      <AiFillClockCircle color="#171f46" />
      <p>{description}</p>

      {tagsList.map(eachTag => (
        <p key={eachTag.id}>{eachTag.name}</p>
      ))}
    </div>
  )
}

export default CourceTimelineCard
