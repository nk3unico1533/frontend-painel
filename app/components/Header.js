"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header style={{ marginBottom: "30px" }}>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link href="/">Login</Link>
        <Link href="/register">Registrar</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
