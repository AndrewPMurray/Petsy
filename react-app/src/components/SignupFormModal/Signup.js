// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import * as sessionActions from "../../store/session";

// function SignupForm() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password === confirmPassword) {
//       setErrors([]);
//       return dispatch(sessionActions.signUp({ email, username, password }))
//         .catch(async (res) => {
//           const data = await res.json();
//           if (data && data.errors) setErrors(data.errors);
//         });
//     }
//     return setErrors(["Passwords must match."]);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <ul className='errors-list'>
//         {errors.map((error, idx) => (
//           <li className='error' key={idx}>{error}</li>
//         ))}
//       </ul>
//       <div className="input-div">
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder='Email Address'
//           required
//         />
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder='Username'
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder='Password'
//           required
//         />
//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           placeholder='Confirm Password'
//           required
//         />
//         <button id="signup" className='signup-button' type="submit">Sign Up</button>
//       </div>
//     </form>
//   );
// }

// export default SignupForm;
