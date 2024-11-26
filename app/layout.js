import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Portfolio Developper Front-End",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
