import React from 'react'
import "./OTP.css";
const Otp = () => {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
    <div className="bg-[#FFFFFF] flex flex-col gap-[7vmin] items-center  rounded-[2vmin] h-[92%] w-[60%] parent">
      <div className="w-[100%] items-center flex flex-col justify-center  logo">
          <img src="src\assets\Components\Authentication\Login\image.png" alt="" />
      </div>
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
        <b> <a href="">Resent OTP</a></b>
    </div>
    <div id='submitbtn' className='w-[100%] text-right'>
        <button className='w-[100%]'>Submit</button>
        <p className='font-semibold text-[3vmin]'>Back to Login Page</p>
    </div>

      </div>
      </div>
  )
}

export default Otp