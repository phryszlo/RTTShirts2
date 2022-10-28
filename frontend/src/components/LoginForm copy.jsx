// import { Component } from 'react';
// import { logIn } from '../utilities/users-service'

// export default class LoginForm extends Component {

//   state = {
//     name: '',
//     email: '',
//     password: '',
//     error: '',
//   };


//   handleChange = (evt) => {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//       error: ''
//     });
//   };

//   handleSubmit = async (evt) => {
//     evt.preventDefault();
//     try {
//       let { error, ...formData } = this.state //javascript is weird.
//       const user = await logIn(formData);
//       if (user === 401) return this.setState({error: 'Unauthorized'})
//       this.props.setUser(user)
//     } catch {
//       this.setState({ error: 'Login Failed - Try Again' });
//     }
//   };

//   render() {
//     const disable = this.state.password && false;
//     return (
//       <div>
//         <div className="form-container">
//           <form autoComplete="off" onSubmit={this.handleSubmit}>
//             <label>Email</label>
//             <input type="email" name="email" value={this.state.email} placeholder="your email" onChange={this.handleChange} required />
//             <label>Password</label>
//             <input type="password" name="password" value={this.state.password} placeholder="thy password" onChange={this.handleChange} required />
//             <button type="submit" disabled={disable}>LOG IN</button>
//           </form>
//         </div>
//         <p className="error-message" onChange={() => this.logMsg(this.state.error)} >{this.state.error}</p>
//       </div>
//     );
//   }
// }