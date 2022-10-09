import propTypes from 'prop-types'

function Card({children , isReversed}) {
  return (
    <div className={`card ${isReversed && 'reverse'}`}>{children}</div>
  )
}

Card.defaultProps = {
    isReversed : true,
}

Card.propTypes = {
    children : propTypes.node.isRequired,
    isReversed : propTypes.bool,
}

export default Card
