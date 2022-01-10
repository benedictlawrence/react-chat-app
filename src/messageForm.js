import React, { useState } from "react";
import { supabase } from "./supabaseClient";

function MessageForm() {
  let [content, setContent] = useState("");

  function onChange(event) {
    setContent(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    supabase
      .from("messages")
      .insert([{ content: content }])
      .then(function () {
        console.log("that worked");
      });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={content} onChange={onChange} />
        <button>Send</button>
      </form>
    </div>
  );
}

export default MessageForm;
