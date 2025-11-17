"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
      <div className="brand">
        <div className="logo">PN</div>
        <div>
          <div style={{color:"white", fontWeight:700}}>Painel Consulta</div>
          <div className="small">Dark Neon • Vaporwave</div>
        </div>
      </div>

      <nav style={{display:"flex", gap:12, alignItems:"center"}}>
        <Link className="btn" href="/">Login</Link>
        <Link className="btn" href="/register">Registrar</Link>
        <Link className="btn" href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
