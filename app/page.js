"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1>Painel • Dark Neon</h1>

      <div style={{ margin: "20px 0" }}>
        <Link href="/">Login</Link> | <Link href="/register">Registrar</Link>
      </div>

      <p>Use seu e-mail e senha para acessar o painel.</p>

      <form style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>E-mail</label>
          <input type="email" placeholder="seu@exemplo.com" style={{ width: "100%" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Senha</label>
          <input type="password" placeholder="••••••••" style={{ width: "100%" }} />
        </div>

        <button style={{ background: "#000", color: "#fff", width: "100%" }}>Entrar</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <Link href="/register">Criar conta</Link>
      </div>
    </main>
  );
}
