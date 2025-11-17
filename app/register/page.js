"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <main style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1>Criar Conta</h1>

      <form style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>E-mail</label>
          <input type="email" placeholder="seu@exemplo.com" style={{ width: "100%" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Senha</label>
          <input type="password" placeholder="••••••••" style={{ width: "100%" }} />
        </div>

        <button style={{ background: "#000", color: "#fff", width: "100%" }}>
          Registrar
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <Link href="/">Voltar ao login</Link>
      </div>
    </main>
  );
}
