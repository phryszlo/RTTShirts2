import { useState } from 'react';
import { logIn } from '../utilities/users-service'

// export default class LoginForm extends Component {
export default function LoginForm({ setUser }) {

  const [email, setEmail] = useState('alf@g');
  const [password, setPassword] = useState('123');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formData = { email, password };
    try {
      const user = await logIn(formData);
      if (user === 401) return setError('Unauthorized')
      setUser(user.data)
    } catch {
      setError('Login Failed - Try Again');
    }
  };

  const disable = password && false;
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="yer email"
            onChange={handleEmailChange}
            required />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="thy password"
            onChange={handlePasswordChange}
            required />
          <button type="submit" disabled={disable}>LOG IN</button>
        </form>
      </div>
      <p className="error-message" onChange={() => this.logMsg(error)} >{error}</p>
    </div>
  );
}