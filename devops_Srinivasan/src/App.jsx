import React from "react";
function App()
{
  function showmessage()
  {
    alert={submitted};
  }
  function OTP()
  {
    alert="opt generated";
  }

  return (

    <div>
      <p>2312127-Srinivasan S</p>
      <h1>Registration Form</h1>
      <h3>Fill your details to register</h3>
    Username<input type="text"></input> <hr />
    Email<input type="email"></input> <hr></hr>
    Password <input type="password"></input> <hr />
    Confirm password <input type="password"></input>  <hr />
    Enter your Otp <input type="number"></input>  <hr />
      <button onClick={showmessage}>Submit </button> <hr />
      
      <button onClick={OTP}>Generate otp</button>
    </div>
  )
}

export default App;