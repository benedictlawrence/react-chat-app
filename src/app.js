import React, { useState, useEffect } from "react";
import Login from "./login";
import { supabase } from "./supabaseClient";
import Messages from "./messages";
import MessageForm from "./messageForm";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  let markup = <Login />;
  if (session && session.user) {
    markup = (
      <div>
        <Messages />
        <MessageForm />
      </div>
    );
  }

  return (
    <div>
      <h1>Supabase + React</h1>
      {markup}
    </div>
  );
}

export default App;
