import React from 'react'
import "./OTP.css";
const Otp = () => {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center otpparent">
    <div id="otpdiv" className="bg-[#FFFFFF] flex flex-col gap-[7vmin] items-center  rounded-[2vmin] h-[92%] w-[60%] parent">
          <img src="https://s3-alpha-sig.figma.com/img/569c/113d/9b40f56e05304dfc8eada37f75b82ef1?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lcKKGr0qemFTQmzGrZ4vPY6U91ssdg98j1pKD0oeKxsDXMSJp5xEX8pWKQU2pghGx1gWHIh1D0EMLBPzRHQtANx58fkVcsBv6htjx5pNCsTg-gQ-7~Z-mH6Eu7~A7gY92WQkiyZyAOuZNaLEXG-wSv5RlBEXXUPC-TA1y6AjGRPHoTF9hfOrYqD0REQv-VekHlLFZkOvuw1lFbEWbOmi5GjtxqrXmjL6tokb~Nyeggc-NGkIUx0G-2ZAHJu7uq7YhBS~bhxQy~O7T-gnJACE-EKzhDXlVcvYCw-XxudWe6B-MSu6vY4mvjHqcC48FVDXdhnIDCQhYia4GvQcSFwm6Q__" alt="" />
    <div className='w-[100%] flex flex-col gap-[2vmin]  items-center'>
        <p className='otpemailtext'>Send OTP on Your Email</p>
        <div id='inputss' className='flex flex-row gap-[2vmin] '>
        <input className='w-[7vmin]  h-[7vmin] placeholder:text-center placeholder:text-[#8098F980] border-[#8098F980] border-[2px] rounded-lg bg-[#8098F91A]' readOnly  type="text" placeholder='-'  />
        <input className='w-[7vmin]  h-[7vmin] placeholder:text-center placeholder:text-[#8098F980] border-[#8098F980] border-[2px] rounded-lg bg-[#8098F91A]' readOnly  type="text" placeholder='-'  />
        <input className='w-[7vmin]  h-[7vmin] placeholder:text-center placeholder:text-[#8098F980] border-[#8098F980] border-[2px] rounded-lg bg-[#8098F91A]' readOnly  type="text" placeholder='-'  />
        <input className='w-[7vmin]  h-[7vmin] placeholder:text-center placeholder:text-[#8098F980] border-[#8098F980] border-[2px] rounded-lg bg-[#8098F91A]' readOnly  type="text" placeholder='-'  />
        <input className='w-[7vmin]  h-[7vmin] placeholder:text-center placeholder:text-[#8098F980] border-[#8098F980] border-[2px] rounded-lg bg-[#8098F91A]' readOnly  type="text" placeholder='-'  />
        <input className='w-[7vmin]  h-[7vmin] placeholder:text-center placeholder:text-[#8098F980] border-[#8098F980] border-[2px] rounded-lg bg-[#8098F91A]' readOnly  type="text" placeholder='-'  />
        </div>
        <b><a href="">Resent OTP</a></b>
    </div>
    <div id='submitbtn' className='w-[100%] text-right'>
        <button className='w-[100%]'>Submit</button>
        <p id="logintext" className='font-semibold text-[3vmin]'>Back to Login Page</p>
    </div>

      </div>
      </div>
  )
}

export default Otp