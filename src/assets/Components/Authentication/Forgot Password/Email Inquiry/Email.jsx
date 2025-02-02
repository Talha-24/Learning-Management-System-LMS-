import "./Email.css";
const Email = () => {
  return (

    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div className="bg-[#FFFFFF] flex flex-col  rounded-[4vmin] h-[94%] w-[60%] emailparent">
        <div className="w-[100%] text-center flex flex-col justify-center  elogo">
          <img src="https://s3-alpha-sig.figma.com/img/569c/113d/9b40f56e05304dfc8eada37f75b82ef1?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lcKKGr0qemFTQmzGrZ4vPY6U91ssdg98j1pKD0oeKxsDXMSJp5xEX8pWKQU2pghGx1gWHIh1D0EMLBPzRHQtANx58fkVcsBv6htjx5pNCsTg-gQ-7~Z-mH6Eu7~A7gY92WQkiyZyAOuZNaLEXG-wSv5RlBEXXUPC-TA1y6AjGRPHoTF9hfOrYqD0REQv-VekHlLFZkOvuw1lFbEWbOmi5GjtxqrXmjL6tokb~Nyeggc-NGkIUx0G-2ZAHJu7uq7YhBS~bhxQy~O7T-gnJACE-EKzhDXlVcvYCw-XxudWe6B-MSu6vY4mvjHqcC48FVDXdhnIDCQhYia4GvQcSFwm6Q__" alt="" />
          <p id='forgotpasstext' className="text-black text-[3.4vmin] font-semibold">Forgot Password</p>
        </div>
        <div className="inputs">
          <p id='email' className="text-center text-black">Email</p>
          <input type="text" autoFocus />
        </div>
        <div id="submitBtn" className=" w-[100%]">
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