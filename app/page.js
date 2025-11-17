"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "./components/Input";
import Button from "./components/Button";
import { login } from "./lib/api";

export default function LoginPage(){
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const doLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await login(email, senha);
      if(res && res.userId){
        localStorage.setItem("pc_user", JSON.stringify({ id: res.userId, email }));
        router.push("/dashboard");
      } else {
        setError(res.error || "Credenciais inválidas");
      }
    } catch(err){
      setError("Erro ao conectar");
    } finally { setLoading(false); }
  };

  return (
    <div style={{ maxWidth:520, margin:"20px auto" }}>
      <div className="card">
        <h2 style={{ color:"white", marginBottom:8 }}>Entrar</h2>
        <p className="small" style={{ marginBottom:12 }}>Use seu e-mail e senha para acessar o painel.</p>

        <Input label="E-mail" value={email} onChange={setEmail} placeholder="seu@exemplo.com" />
        <Input label="Senha" value={senha} onChange={setSenha} placeholder="••••••" type="password" />

        {error && <div style={{ color:"#ff8a8a", marginBottom:10 }}>{error}</div>}

        <Button onClick={doLogin} variant="primary">{loading ? "Entrando..." : "Entrar"}</Button>

        <div style={{ marginTop:12 }}>
          <a href="/register" className="btn" style={{ display:"inline-block", padding:"8px 12px" }}>Criar conta</a>
        </div>
      </div>
    </div>
  );
}
