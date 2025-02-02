import "./Login.css";
const Login = () => {
  return (

    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div className="bg-[#FFFFFF] rounded-[2vmin] h-[94%] w-[60%] lparent">
        <div className="w-[100%] items-center flex flex-col justify-center  logol">
          <img src="src\assets\Components\Authentication\Login\image.png" alt="" />
          <p className="text-black text-[3.2vmin]">Sign in Your Account</p>
        </div>

        <div className="linputs">
          <p>Email</p>
          <input type="text" />
          <p>Password</p>
          <input type="text" />
          <div id='btnParent' className="">
            <div className="lforgotparent">
              <div className="lforgotCont">
                <svg className="w-[4.5vmin] h-[4.5vmin]" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="39" height="30" fill="#D9D9D9" fill-opacity="0.58" />
                </svg>
                <p id='preference' className="">Remember my preference</p>
              </div>
              <p id="lforgottext">Forgot Password?</p>
            </div>
            <button className="w-[100%]">Sign In</button>
            <p id='accounttxt' className="">Don't have an account? <a href="" className="underline">Sign up</a></p>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Login