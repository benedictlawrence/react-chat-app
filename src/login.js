import React, { useState } from "react";
import { supabase } from "./supabaseClient";

function Login() {
  let [email, setEmail] = useState("");

  function onChange(event) {
    setEmail(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    supabase.auth.signIn({ email: email }).then(function () {
      console.log("you are logged in");
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="email" value={email} onChange={onChange} />
      <button>Login</button>
    </form>
  );
}

export default Login;
