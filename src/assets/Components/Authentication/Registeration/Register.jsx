import "./Register.css";
const Register = () => {
    return (

        <div className="w-[100%] h-[100vh] flex items-center justify-center registerparent">
            <div className="bg-[#FFFFFF] rounded-[20px] h-[92%] w-[60%] parent registerdiv">
                <div className="w-[100%] text-center flex flex-col justify-center">
                    <img src="https://s3-alpha-sig.figma.com/img/569c/113d/9b40f56e05304dfc8eada37f75b82ef1?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lcKKGr0qemFTQmzGrZ4vPY6U91ssdg98j1pKD0oeKxsDXMSJp5xEX8pWKQU2pghGx1gWHIh1D0EMLBPzRHQtANx58fkVcsBv6htjx5pNCsTg-gQ-7~Z-mH6Eu7~A7gY92WQkiyZyAOuZNaLEXG-wSv5RlBEXXUPC-TA1y6AjGRPHoTF9hfOrYqD0REQv-VekHlLFZkOvuw1lFbEWbOmi5GjtxqrXmjL6tokb~Nyeggc-NGkIUx0G-2ZAHJu7uq7YhBS~bhxQy~O7T-gnJACE-EKzhDXlVcvYCw-XxudWe6B-MSu6vY4mvjHqcC48FVDXdhnIDCQhYia4GvQcSFwm6Q__" alt="" />
                    <p id='signuptxt' className="text-black text-[3.2vmin]">Signup Your Account</p>
                </div>
                <div className="Reginputs">
                    <p>Username</p>
                    <input type="text" />
                    <p>Email</p>
                    <input type="text" />
                    <p>Password</p>
                    <input type="text" />
                    <div id="signupbtn">
                        <button>Sign Up</button>
                        <div className="signinCont text-black font-semibold" >
                            <p>Already have an account?</p><p className="underline"><a href="#">Sign in</a></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Register