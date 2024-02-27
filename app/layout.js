import { Sora } from "next/font/google";
import "./globals.css";


const inter = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Joseph Meus - Full Stack Developer",
  description: "Joseph Meus is a full stack developer based in Bellingham Washington. He is passionate about creating beautiful and functional applications. He is currently working as a Backend Engineer with Chek Financial, a fintech startup based in Miami Florida.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
