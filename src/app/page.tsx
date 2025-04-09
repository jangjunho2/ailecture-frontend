"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) {
      alert("이미지를 선택해주세요!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch("http://localhost:8080/api/ocr", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();
      setResult(text);
    } catch (err) {
      setResult("서버 연결 실패 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>📄 OCR 텍스트 추출기</h1>

      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading} style={{ marginTop: "1rem" }}>
        {loading ? "처리 중..." : "텍스트 추출"}
      </button>

      <div style={{ marginTop: "2rem", whiteSpace: "pre-wrap", background: "#f9f9f9", padding: "1rem", borderRadius: "8px" }}>
        <h3>📋 추출 결과</h3>
        <p>{result}</p>
      </div>
    </main>
  );
}
