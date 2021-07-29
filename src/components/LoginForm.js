const LoginForm = ({show,handleLogin}) => {
    if(!show) return null
  
    return (
      <div>
          <form onSubmit ={handleLogin}> 
            <input type="text" name="username" />
            <inpt  type="text"  name="password" />
            <button type="submit">LOGIN</button>
          </form>
      </div>
    )
  }

  export default LoginForm