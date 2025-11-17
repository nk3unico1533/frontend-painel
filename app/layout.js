import "./globals.css";

export const metadata = {
  title: "Painel",
  description: "Login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}