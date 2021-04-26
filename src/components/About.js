import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      {/* instead of anchor tag - we import link from react router dom
        instead of href, we use to
      */}
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About
