import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../store/actions'

const Link = ({ active, children, onClick }) => (

    <div className={active ? 'active' : ''} 
        onClick={onClick}>
        {children}
    </div>
)

// Link.propTypes = {
//   active: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired
// }

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
  })
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Link)