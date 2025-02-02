import "./Login.css";
const Login = () => {
  return (

   <div className="w-[100%] h-[100vh] flex items-center justify-center">
    <div className="bg-[#FFFFFF] rounded-[20px] min-h-[70%] w-[40%] parent">
   <div className="w-[100%] text-center flex flex-col justify-center  logo">
   <img src="src\assets\Components\Authentication\Login\image.png" alt="" />
<p className="text-black text-[3.2vmin]">Sign in Your Account</p>
</div>
<div className="inputs">
    <p>Email</p>
    <input type="text" />
    <p>Password</p>
    <input type="text" />
    <div className="forgotCont">
        <input type="checkbox"/>
        <p className="">Remember my preference</p>
    </div>
    <p id="forgottext">Forgot Password?</p>
    <button>Sign In</button>
    <div className="signupCont">
        <p>Dont have an account?</p><p><a href="#" className="text-yellow-500">Sign up</a></p>
    </div>
</div>
   
</div>
</div>

  )
}

export default Login