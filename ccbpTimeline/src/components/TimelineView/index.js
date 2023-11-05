// Write your code here
import {Chrono} from 'react-chrono'
import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList.map(eachItem => ({title: eachItem.title}))
  console.log(items)

  return (
    <div>
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono
        mode="VERTICAL"
        items={items}
        theme={{
          primary: 'red',
          secondary: 'blue',
          cardBgColor: 'yellow',
          cardForeColor: 'violet',
          titleColor: 'red',
        }}
      >
        {timelineItemsList.map(eachItem =>
          eachItem.categoryId === 'COURSE' ? (
            <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
          ) : (
            <ProjectTimelineCard key={eachItem.id} projectDetails={eachItem} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
