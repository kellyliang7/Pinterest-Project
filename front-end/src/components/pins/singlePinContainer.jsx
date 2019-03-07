import { connect } from 'react-redux';
import SinglePin from './singlePin';
import { fetchSinglePin } from '../../actions/pinsAction';

const mapStateToProps = (state) => {
  // debugger
  return {
    currentPin: state.pins.currentPin // don't need object.values because not mapping; passed in as a prop 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSinglePin: (id) => dispatch(fetchSinglePin(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePin)

 
