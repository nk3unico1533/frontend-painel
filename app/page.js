"use client";

import Link from "next/link";
import Input from "./components/Input";
import Button from "./components/Button";
import Header from "./components/Header";

export default function LoginPage() {
  return (
    <main style={{ maxWidth: "500px", margin: "0 auto" }}>
      <Header />

      <h1>Painel • Login</h1>

      <form style={{ marginTop: "20px" }}>
        <Input label="E-mail" type="email" placeholder="seu@exemplo.com" />
        <Input label="Senha" type="password" placeholder="••••••••" />
        <Button>Entrar</Button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <Link href="/register">Criar conta</Link>
      </div>
    </main>
  );
}
