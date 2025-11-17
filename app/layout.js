import "./globals.css";

export const metadata = {
  title: "Painel • Dark Neon",
  description: "Interface front-end do painel"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <footer style={{ textAlign: "center", marginTop: "40px", opacity: 0.6 }}>
          © {new Date().getFullYear()} Painel Consulta
        </footer>
      </body>
    </html>
  );
}
