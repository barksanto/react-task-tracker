import PropTypes from 'prop-types'


const Header = ({ title }) => {
  return (
    <div>
      <header>
        <h1 >{title}</h1>
      </header>
    </div>
  )
}

// If I wanted to style using an object (CSS in JS)
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
