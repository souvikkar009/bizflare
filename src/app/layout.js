import Header from "@/components/header/Header";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import ChakraUIProvider from "@/providers/ChakraUIProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "BizFlare",
  description: "SaaS Platform BizFlare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} poppins bg-brand-bg3`}>
        <ChakraUIProvider>
          <div className="fixed top-0 w-screen mb-20">
            <Header />
          </div>
          <div>{children}</div>
        </ChakraUIProvider>
      </body>
    </html>
  );
}
