import "./Email.css";
const Email = () => {
  return (

   <div className="w-[100%] h-[100vh] flex items-center justify-center">
    <div className="bg-[#FFFFFF] flex flex-col justify-around rounded-[20px] min-h-[80%] w-[60%] emailparent">
   <div className="w-[100%] text-center flex flex-col justify-center  logo">
   <img src="src\assets\Components\Authentication\Login\image.png" alt="" />
<p id='forgotpasstext' className="text-black text-[3.4vmin] font-semibold">Forgot Password</p>
</div>
<div className="inputs">
    <p id='email' className="text-center text-black">Email</p>
    <input type="text" autoFocus />
</div>
<div className=" w-[100%]">
<button className="w-[100%]">Submit</button>
<div className="emailsignupCont">
        <h6 className="text-right font-semibold">Already have an account?</h6>
        <h6 className="underline font-semibold"><a href="#">Sign in</a></h6>
        </div>
    </div>
   
</div>
</div>

  )
}

export default Email