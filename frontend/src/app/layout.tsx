import { Roboto } from "next/font/google";
import Header from "@/global-components/header";
import Footer from "@/global-components/footer";
import { ThemeProvider } from "@/contexts/themeContext";
import "@/styles/global.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Resume Builder",
  description: "Build your professional resume with ease"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
