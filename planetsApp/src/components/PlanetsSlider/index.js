// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  console.log(planetsList)
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="app-container">
      <h1 className="heading">PLANETS</h1>
      <div className="slider-container" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetSlider
