import { connect } from 'react-redux';
import { loginUser }  from '../../actions/sessionAction';
import RegisterForm from '../auth/registerForm';

const mapStateToProps = () => {
};

const mapDispatchToProps = (dispatch) => {
  return{
    loginUser: (registerUser) => dispatch(loginUser(registerUser))
  }
}

export default connect(null, mapDispatchToProps)(RegisterForm)