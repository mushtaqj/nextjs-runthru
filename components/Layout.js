import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const router = useRouter();

  const path = router.asPath.replace("/", "") || "Home";
  return (
    <>
      <Head>
        <title>Net Ninja | {path}</title>
      </Head>
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
