import { connect } from 'react-redux';
import { createUser, checkAuthenticateStatus }  from '../../actions/sessionAction';
import RegisterForm from '../auth/registerForm';


const mapDispatchToProps = (dispatch) => {
  return{
    createUser: (registerUser) => dispatch(createUser(registerUser)),
    verify: () => dispatch(checkAuthenticateStatus()),
  }
}

export default connect(null, mapDispatchToProps)(RegisterForm)