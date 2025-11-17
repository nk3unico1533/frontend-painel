"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://painel-backend-3i7j.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        window.location.href = "/dashboard";
      } else {
        alert(data.message || "Erro ao fazer login");
      }
    } catch (err) {
      alert("Erro de conexão.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: 800, margin: "0 auto" }}>
      <div className="card-rgb" style={{ padding: "25px", background: "rgba(255,255,255,0.03)" }}>
        
        <h1 style={{ fontSize: 35, marginBottom: 20 }}>Entrar</h1>

        <p style={{ opacity: 0.7, marginBottom: 20 }}>
          Use seu e-mail e senha para acessar o painel.
        </p>

        <form onSubmit={handleLogin}>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="seu@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: 20 }}
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="••••••••"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{ marginBottom: 25 }}
          />

          <button type="submit">Entrar</button>
        </form>

        <div style={{ marginTop: 25 }}>
          <a href="/register">Criar conta</a>
        </div>

      </div>
    </div>
  );
}