export const metadata = {
  title: "Dark Aurora Painel",
  description: "Painel de consultas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}