import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const Layout = ({children, title = "Protfolio"}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

