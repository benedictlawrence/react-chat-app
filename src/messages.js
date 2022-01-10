import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

function Messages() {
  let [messages, setMessages] = useState([]);

  useEffect(function () {
    supabase
      .from("messages")
      .select()
      .then(function (data) {
        setMessages(data.body);
      });
  }, []);

  useEffect(
    function () {
      supabase
        .from("messages")
        .on("INSERT", function (payload) {
          setMessages([...messages, payload.new]);
        })
        .subscribe();
    },
    [messages]
  );

  let messagesMarkup = messages.map(function (msg) {
    return (
      <div key={msg.id}>
        <p>{msg.content}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>{messagesMarkup}</h2>
    </div>
  );
}

export default Messages;
