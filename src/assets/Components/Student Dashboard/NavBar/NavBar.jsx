import React from 'react'
import "./NavBar.css";

const NavBar = () => {
  return (
    <div id='Navbar' className='w-[18%] h-[98%] bg-[#00173D] rounded-[4vmin] flex flex-col justify-start'>
        <div id="logoCont" className='flex flex-row items-center gap-[15vmin]'>
            
      <img id="logo"  src="https://s3-alpha-sig.figma.com/img/569c/113d/9b40f56e05304dfc8eada37f75b82ef1?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lcKKGr0qemFTQmzGrZ4vPY6U91ssdg98j1pKD0oeKxsDXMSJp5xEX8pWKQU2pghGx1gWHIh1D0EMLBPzRHQtANx58fkVcsBv6htjx5pNCsTg-gQ-7~Z-mH6Eu7~A7gY92WQkiyZyAOuZNaLEXG-wSv5RlBEXXUPC-TA1y6AjGRPHoTF9hfOrYqD0REQv-VekHlLFZkOvuw1lFbEWbOmi5GjtxqrXmjL6tokb~Nyeggc-NGkIUx0G-2ZAHJu7uq7YhBS~bhxQy~O7T-gnJACE-EKzhDXlVcvYCw-XxudWe6B-MSu6vY4mvjHqcC48FVDXdhnIDCQhYia4GvQcSFwm6Q__" alt="" />


      <svg className='w-[5.5vmin] h-[6.5vminS]' viewBox="0 0 49 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="1.5" x2="49" y2="1.5" stroke="white" stroke-width="3"/>
<line y1="13.5" x2="49" y2="13.5" stroke="white" stroke-width="3"/>
<line y1="27.5" x2="38" y2="27.5" stroke="white" stroke-width="3"/>
</svg>
        </div>
        <div id="userdetails">
            <div id="userimagecontainer">
            <img id='userImage' src="https://s3-alpha-sig.figma.com/img/8ada/4b5e/9db6fa638fd610ae56566f29347fa6cc?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X9qd70kPlhzEmzzUMjhDCScoEoPKpTKfSXPdUr3ArZKB7as3NEZpwbXNh4VqU0-EdKAl~Mqwm2n823Mcmc5CWbOIXN3hXyBEgDMUqhtqnFzAb4vSYWd4DVbih5SBVj9E4D2KLgeEDOzVt9Gqj5aVDwPvKQbLfu~Lys8doBz6VX-ifWs5nWMQfn5q~qFI~pWloBOkJ7-gUCaA4uX8ET1LugVEi~UUiG8QPb87UmSEfOd6QXyqbrxPo~7qpJqUT4aTuMEC9DECoCoR9L4nV7OxiRfG5chB5dAaQPteD6ZPV9tnUbgTkBHHyP5Jn1SicCr9gZ4SGkx5v9o-rhbi9l1WVA__" alt="" />
            </div>
         <div id="username" className="">
            <h6 id='namee' className='w-[100%] inline-block'>Hi Alex</h6>
            <h6 id='usercode' className='w-[100%] inline-block'>E173037</h6>
         </div>
        </div>
        {/* NavButtons */}
        <div id="NavButtonsContainer">
        <button>
        <img src="src\assets\Components\Student Dashboard\NavBar\NavBar Icons\home 2.svg" alt="" />
{/* Home */}
<p>Home</p>
        </button>
        <button>
       <img src="src\assets\Components\Student Dashboard\NavBar\NavBar Icons\paper 2.svg" alt="" />
{/* Courses */}
<p>Courses</p>

        </button>
        <button>
      <img src="src\assets\Components\Student Dashboard\NavBar\NavBar Icons\online-learning 1.svg" alt="" />
{/* Assignments */}
<p>Assignments</p>
 </button>
        <button>
<img src="src\assets\Components\Student Dashboard\NavBar\NavBar Icons\schedule 1.svg" alt="" />
{/* timeTable */}
<p>Time Table</p>

        </button>
        <button>
        <img src="src\assets\Components\Student Dashboard\NavBar\NavBar Icons\chat 1.svg" alt="" />
        <p>Forms</p>
{/* Chat/Form */}
        </button>
        <button>
       <img src="src\assets\Components\Student Dashboard\NavBar\NavBar Icons\setting 1.svg" alt="" />
{/* Setting */}
<p>Setting</p>
        </button>


        </div>
        <div></div>
    </div>
  )
}

export default NavBar