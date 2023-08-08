import { useRef, FormEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const usernameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()

  const [user, setUser] = useState<LoggedUser>({username:'', token:''})
  console.log(user)

  useEffect(()=>{
    if (user.username) navigate('/')
  },[user])

  
  async function handleUserData(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const res = await fetch(
      'https://matrix-fakebook-123.onrender.com/api/sign-in',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usernameField.current!.value,
          password: passwordField.current!.value,
        }),
      }
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setUser({
        username:usernameField.current!.value.toString(),
        token: data.access_token
      })
      resetForm()
    } else window.alert('Invalid UserData');
  }

  function resetForm(){
    usernameField.current!.value = ''
    passwordField.current!.value = ''
  }

  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={handleUserData} className="login-form">
        <label>
          Username:
          <br />
          <input type="text" ref={usernameField} required />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input type="password" ref={passwordField} required />
        </label><br />
        <button>Sign In</button>
      </form>
    </>
  );
}
