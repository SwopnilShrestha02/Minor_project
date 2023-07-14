import axios from 'axios'
import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import RecomendationSection from './RecomendationSection'

const Test = ({ productName }) => {
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    async function test() {
      const { data } = await axios.get(`http://localhost:8000/${productName}`)
      setRecommendations(data)
    }
    test()
  }, [productName])

  return (
    <>
      <h3>Similar Products</h3>
      <Row>
        {recommendations &&
          recommendations.map((recommendationName, i) => (
            <RecomendationSection
              key={i}
              recommendationName={recommendationName}
            />
          ))}
      </Row>
    </>
  )
}

export default Test
