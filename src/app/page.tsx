"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/hello")
      .then((res) => res.text())
      .then(setMsg)
      .catch(() => setMsg("연결 실패 😢"));
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Spring 백엔드 연결 테스트 2</h1>
      <p>{msg}</p>
    </main>
  );
}
