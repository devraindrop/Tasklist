// api.js

// Simulate an asynchronous API call to validate user credentials
export const validateUserCredentials = async (username, password) => {
    // Simulate API latency with setTimeout
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    const userCredentials = [
      { username: 'user1', password: 'password1', group: 'group1' },
      { username: 'user2', password: 'password2', group: 'group1' },
      { username: 'user3', password: 'password3', group: 'group2' },
      { username: 'user4', password: 'password4', group: 'group2' },
      { username: 'user5', password: 'password5', group: 'group3' },
    ];
  
    const matchedUser = userCredentials.find(
      (user) => user.username === username && user.password === password
    );
  
    return matchedUser;
  };
  