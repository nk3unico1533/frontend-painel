import "./login.css";
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
    <div className="login-container">

      <div className="card-rgb">
        <h1 style={{ fontSize: 38, marginBottom: 18, fontWeight: 700 }}>
          Entrar
        </h1>

        <p style={{ opacity: 0.7, marginBottom: 25 }}>
          Use seu e-mail e senha para acessar o painel.
        </p>

        <form onSubmit={handleLogin}>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="seu@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label style={{ marginTop: 20 }}>Senha</label>
          <input
            type="password"
            placeholder="••••••••"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit" style={{ marginTop: 30 }}>
            Entrar
          </button>
        </form>

        <div style={{ marginTop: 30 }}>
          <a href="/register">Criar conta</a>
        </div>
      </div>

    </div>
  );
}