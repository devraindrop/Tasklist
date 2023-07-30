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
          <Menu
            onLogout={handleLogout}
            isLoggedIn={isLoggedIn}
          />            

{!isLoggedIn ? (
        <div className="bg-gray-100 mx-auto px-4 py-8">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">User Login</h2>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              onClick={handleLogin}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
          </div>
        </div>
      ) : (
        <>
          {/* Show content for logged-in user */}
        </>
      )}

        </div>
     );
}
 
export default Login;