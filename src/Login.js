import React from 'react';


const Login = (props) =>{

    const props =
    {email,
    setEmail,
    password,setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError};

    return (
        <section className="login">
        <div className="loginContainer">
            <label>Username</label>
            <input type="text" 
                autofocus required 
                value = {email}
                onChange = {(e) =>  (e.target.value)
             />
             <p className="errorMsg"> 
                {emailError}
             </p>
             <label>Password</label>
             <input type="text" 
                 required 
                 value = {Password}
                 onChange = {(e) => setPassword(e.target.value)
             />
             <p className="errormsg"> 
                {PasswordError}
             </p>
             <div className="btnContainer">
                {hasAccount ? (
                    <>
                    <button onClick={handleLogin}>Sign In </button>
                    <p>Don't have an account? <span onClick={()=> setHasAccount(!hasAccount)}>Sign Up</span></p>
                    </>
                ):(
                    <>
                    <button onClick={handleSignup}>Sign Up </button>
                    <p>Have an account? <span onClick={()=> setHasAccount(!hasAccount)}>Sign In</span></p>
                    </>
                )}
             
             </div>
             </div>
        

        </section>
    );

    
};


export default Login;
