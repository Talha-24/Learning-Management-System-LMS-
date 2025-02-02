import "./Register.css";
const Register = () => {
    return (

        <div className="w-[100%] h-[100vh] flex items-center justify-center registerparent">
            <div className="bg-[#FFFFFF] rounded-[20px] h-[92%] w-[60%] parent registerdiv">
                <div className="w-[100%] text-center flex flex-col justify-center">
                    <img src="src\assets\Components\Authentication\Login\image.png" alt="" />
                    <p id='signupt' className="text-black text-[3.2vmin]">Signup Your Account</p>
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