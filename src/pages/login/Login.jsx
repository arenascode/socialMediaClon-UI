import { Link } from 'react-router-dom';
import './login.scss'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext.jsx';

const Login = () => {

  const { login } = useContext(AuthContext);
  
  const handleLogin = () => {
    login()
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Alias odio
            temporibus ipsum error voluptates doloribus.
          </p>
          <span>Don&apos;t you have an account?</span>
          <Link to={'/register'}><button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder='Username' />
            <input type="password" name="" id="" placeholder='Password' />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login