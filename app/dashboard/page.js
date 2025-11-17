"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import HistoricoFlutuante from "../components/HistoricoFlutuante";
import { consulta, historico } from "../lib/api";

export default function DashboardPage(){
  const [user, setUser] = useState(null);
  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState(null);
  const [hist, setHist] = useState([]);
  const [loading, setLoading] = useState(false);

  const tipos = ["CPF","RG","Nome","Telefone","Placa","Email","CEP","CNPJ"];

  useEffect(()=>{
    const s = localStorage.getItem("pc_user");
    if(s){ const u = JSON.parse(s); setUser(u); fetchHistorico(u.id); }
    else { const local = JSON.parse(localStorage.getItem("pc_history_anon")||"[]"); setHist(local); }
  }, []);

  const fetchHistorico = async (userId) => {
    try {
      const h = await historico(userId);
      setHist(Array.isArray(h) ? h : []);
    } catch(e){
      const local = JSON.parse(localStorage.getItem("pc_history_"+(user?.id||"anon")) || "[]");
      setHist(local);
    }
  };

  const doConsulta = async () => {
    if(!tipo || !valor) return alert("Escolha o tipo e digite o valor.");
    setLoading(true);
    try {
      const res = await consulta(tipo, valor, user ? user.id : 0);
      setResultado(res);
      const entry = { tipo, valor, resultado: res, criadoEm: new Date().toISOString() };
      const newHist = [ entry, ...hist ];
      setHist(newHist);
      localStorage.setItem("pc_history_"+(user?.id||"anon"), JSON.stringify(newHist.slice(0,50)));
    } catch(e){
      alert("Erro ao consultar");
    } finally { setLoading(false); }
  };

  const logout = () => {
    localStorage.removeItem("pc_user");
    window.location.href = "/";
  };

  return (
    <div style={{ maxWidth:980, margin:"20px auto" }}>
      <div className="card">
        <Header />
        <div className="layout-two" style={{ marginTop:12 }}>
          <div>
            <div className="section-title">Tipos de consulta</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:12 }}>
              {tipos.map(t=>(
                <button key={t} className="btn" onClick={()=>{ setTipo(t); setResultado(null); }}>{t}</button>
              ))}
            </div>

            <div>
              <div className="small" style={{ marginBottom:8 }}>{tipo ? `Você escolheu: ${tipo}` : "Escolha um tipo acima"}</div>
              {tipo && <Input label={`Digite o ${tipo}`} value={valor} onChange={setValor} placeholder={`Digite o ${tipo}`} />}
              {tipo && <div style={{ display:"flex", gap:8 }}>
                <Button onClick={doConsulta} variant="primary">{loading ? "Consultando..." : "Consultar"}</Button>
                <Button onClick={()=>{ setTipo(""); setValor(""); setResultado(null); }} variant="ghost">Limpar</Button>
              </div>}
            </div>

            {resultado && (
              <div className="result card" style={{ marginTop:12 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div style={{ fontWeight:700, color:"white" }}>Resultado — {resultado.tipo || tipo}</div>
                  <div className="small">{new Date().toLocaleString()}</div>
                </div>

                <div style={{ marginTop:10 }}>
                  {Object.entries(resultado).map(([k,v])=>(
                    <div key={k} style={{ marginTop:6 }}>
                      <div style={{ fontSize:12, color:"var(--muted)" }}>{k}</div>
                      <div style={{ fontWeight:600, color:"white" }}>{typeof v === "object" ? JSON.stringify(v) : String(v)}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display:"flex", gap:8, marginTop:12 }}>
                  <Button onClick={()=>{ alert("Salvo (backend já armazena automaticamente)"); }} variant="primary">Salvar resultado</Button>
                  <Button onClick={()=>{
                    const blob = new Blob([JSON.stringify(resultado, null, 2)], {type:"application/json"});
                    const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href=url; a.download = `${tipo}_${valor}.json`; a.click(); URL.revokeObjectURL(url);
                  }} variant="ghost">Baixar JSON</Button>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="card">
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div className="section-title">Histórico completo (últimos 15)</div>
                <div className="small">{hist.length} registros</div>
              </div>

              <div>
                {hist.slice(0,15).map((h,i)=>(
                  <div key={i} style={{ padding:10, borderRadius:8, marginBottom:8, background:"rgba(0,0,0,0.2)" }}>
                    <div style={{ fontSize:13 }}><strong>{h.tipo}</strong> — {h.valor}</div>
                    <div className="small">{h.criadoEm ? new Date(h.criadoEm).toLocaleString() : "-"}</div>
                  </div>
                ))}
                {hist.length === 0 && <div className="small">Nenhum histórico salvo.</div>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <HistoricoFlutuante items={hist} visible={true} />
    </div>
  );
}