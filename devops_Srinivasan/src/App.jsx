import React from "react";
function App()
{
  function showmessage()
  {
    alert=("submitted");
  }

  return (

    <div>
      <h1>Registration Form</h1>
      <h3>Fill your details to register</h3>
      <input type="text"></input>Username <hr />
      <input type="email"></input>Email <hr></hr>
      <input type="password"></input>Password <hr />
      <input type="password"></input> Confirm password <hr />
        <input type="number"></input> Enter your Otp <hr />
      <button onClick={showmessage}>Submit </button> <hr />
      
      <button onClick={showmessage}>Generate otp</button>
    </div>
  )
}

export default App;