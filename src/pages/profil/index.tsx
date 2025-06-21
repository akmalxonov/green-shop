import { Footer } from "antd/es/layout/layout";
import Navbar from "../../components/navbar";
import ProfilComp from "../../components/profil-comp";
import Modals from "../../components/modals";

const Profil = () => {
  return (
    <>
      <Navbar />
      <ProfilComp />
      <Modals/>
      <Footer />
    </>
  );
};

export default Profil;
