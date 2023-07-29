import { useState } from "react";
import {
    atom,
    useRecoilState,
  } from 'recoil';
import Menu from "./menu";

export const userGroupState = atom({
    key: 'userGroupState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

export const todoTaskListsAtom = atom({
    key:'todoTaskListsAtom',
    default:[],
});

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [, setUserGroup] = useRecoilState(userGroupState);

    const userCredentials = [
        { username: 'user1', password: 'password1', group: 'group1' },
        { username: 'user2', password: 'password2', group: 'group1' },
        { username: 'user3', password: 'password3', group: 'group2' },
        { username: 'user4', password: 'password4', group: 'group2' },
        { username: 'user5', password: 'password5', group: 'group3' },
      ];

      const handleLogin = () => {
        const matchedUser = userCredentials.find(
          (user) => user.username === username && user.password === password
        );
    
        if (matchedUser) {
          setIsLoggedIn(true);
          setErrorMessage('');

          const ug = userCredentials.find(user => user.username === username)?.group;
          console.log(ug)
          setUserGroup(ug);
          
        } else {
          setErrorMessage('Invalid username or password.');
        }
      };

      const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
      };


    return ( 
        <div>
            {!isLoggedIn ? (
        <>
          <h2>User Login</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </>
      ) : (
        <>
          <Menu
            onLogout={handleLogout}
          />
        </>
      )}
        </div>
     );
}
 
export default Login;