import { Link } from 'react-router-dom';
import './register.scss'

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Stoic Land</h1>
          <p>Alias odio temporibus ipsum error voluptates doloribus.</p>
          <span>Do you have an account?</span>
          <Link to={'/login'}>
            <button>
              Login
            </button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" name="" id="emailRegister" placeholder="E-Mail" />
            <input type="password" name="" id="" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;