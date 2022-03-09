import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function Demo() {
  const dispatch = useDispatch();
  const demoLogin = event => {
    event.preventDefault();
    const email = 'demo@aa.io';
    const password = 'password';
    return dispatch(sessionActions.login(email, password)).catch(
      async (res) => { await res.json() })
  };

  return (
    <button className='demo-button' onClick={demoLogin}>Demo User</button>
  );
};

export default Demo;
