// process the Logout click
const logout = async () => {
    const response = await fetch('/api/userRouter/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  // wait for Logout to be clicked
  document.querySelector('#logout').addEventListener('click', logout);
  