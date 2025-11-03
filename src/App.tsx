import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <h1>It works! 🎉</h1>
      <p>
        If you can see this, GitHub Pages + Vite base are configured correctly.
        Now add your components back one by one.
      </p>

      <nav style={{ display: "flex", gap: 12, margin: "16px 0" }}>
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div>Home route</div>} />
        <Route path="/skills" element={<div>Skills route</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}
