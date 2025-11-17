"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-circle">DA</div>

        <div>
          <div className="header-title">Dark Aurora Painel</div>
          <div className="header-sub">By nk</div>
        </div>
      </div>

      <nav className="nav">
        <Link href="/">Login</Link>
        <Link href="/register">Registrar</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}