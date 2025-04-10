import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/global.scss";


const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "FELISPO",
  description: "Felispo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/felispo.svg" sizes="any" />
      <body className={roboto.className}>
          {children}
        </body>
    </html>
  );
}
