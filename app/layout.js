import { GoogleTagManager } from "@next/third-parties/google";
import { Lora } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Head from "next/head"; // Import the Head component
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Asher Samuel | Portfolio",
  description: "Welcome, have a look around",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Asher Samuel | Portfolio</title>
        <meta name="description" content="Welcome, have a look around" />
        <link rel="icon" href="/favicon.ico" /> {/* Add the favicon */}
      </Head>
      <body className={lora.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
