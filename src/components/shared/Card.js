import propTypes from 'prop-types'

function Card({children , isReversed}) {
  return (
    <div className={`card ${isReversed && 'reverse'}`}>{children}</div>
  )
}

Card.defaultProps = {
    isReversed : false,
}

Card.propTypes = {
    children : propTypes.node.isRequired,
    isReversed : propTypes.bool,
}

export default Card
