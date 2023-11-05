// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {data} = props
  return (
    <div className="chart2-container">
      <h1 className="chart2-heading">Vaccination By Gender</h1>
      <ResponsiveContainer width={600} height={500}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={data}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="male" fill="#2cc6c6" />
            <Cell name="female" fill="#2d87bb" />
            <Cell name="others" fill="#f54394" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccinationByGender
