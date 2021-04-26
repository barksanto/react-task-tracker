import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
  const onClick = () => {
    console.log('clickkkkkk')
  }

  return (
    <div>
      <header className="header">
        <h1 >{title}</h1>
        <Button color="green" text="Add" onClick={onClick} />
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
