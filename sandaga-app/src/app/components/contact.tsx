"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    // お問い合わせ内容を送信
  };

  return (
    <div className="w-full py-10 px-2">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="お名前"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <textarea
          placeholder="お問い合わせ内容"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default Contact;
