import RandomQoute from '../components/RandomQoute.jsx'
import Card from '../components/Card.jsx'

export default function Content({ image, data }) {

  return <>
    {image ? (
      <Card image={image} data={data}/>
    ) : (
     <RandomQoute/>
    )}
  </>

}