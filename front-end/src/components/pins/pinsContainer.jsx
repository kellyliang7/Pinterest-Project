import { connect } from 'react-redux';
import { fetchAllPins } from '../../actions/pinsAction';
import PinsList from './pinsList'

const mapStateToProps = (state) => {
  // debugger
  return {
    pins: Object.values(state.pins) // can't map through object 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPins: () => dispatch(fetchAllPins())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinsList)

 
