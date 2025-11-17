export default function Page() {
  return (
    <div className="card">
      <h1>Entrar</h1>
      <p>Use seu e-mail e senha para acessar o painel.</p>

      <form>
        <label>E-mail</label>
        <input type="email" placeholder="seu@exemplo.com" />

        <label>Senha</label>
        <input type="password" />

        <button>Entrar</button>
      </form>

      <a href="/register" style={{ marginTop: "16px", display: "block" }}>
        Criar conta
      </a>
    </div>
  );
}