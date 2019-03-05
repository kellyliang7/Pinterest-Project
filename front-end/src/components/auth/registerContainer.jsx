import { connect } from 'react-redux';
import { loginUser, checkAuthenticateStatus }  from '../../actions/sessionAction';
import RegisterForm from '../auth/registerForm';

const mapStateToProps = () => {
};

const mapDispatchToProps = (dispatch) => {
  return{
    loginUser: (registerUser) => dispatch(loginUser(registerUser)),
    verify: () => dispatch(checkAuthenticateStatus()),
  }
}

export default connect(null, mapDispatchToProps)(RegisterForm)