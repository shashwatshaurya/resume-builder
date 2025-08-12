import { Roboto } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Roboto({ weight: "400", subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
