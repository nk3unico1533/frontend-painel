import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Painel Consulta • Dark Neon",
  description: "Painel de consultas — Dark Neon Vaporwave"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="app-shell">
          <Header />
          <main className="content">{children}</main>
          <footer className="footer-small">© {new Date().getFullYear()} Painel Consulta</footer>
        </div>
      </body>
    </html>
  );
}