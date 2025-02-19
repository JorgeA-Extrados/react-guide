import React from "react";
import Navbar from "../components/bloques/navbar";
import { Container, Fab } from "@mui/material";
import Footer from "../components/footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CardPromotorPlus from "../components/cardPromotorPlus";
import { useTranslation } from "react-i18next";

const Promotorplus = () => {
  const { t } = useTranslation();
  const handleWhatsAppRedirect = () => {
    const whatsappURL = `https://wa.me/${t("contact.what-tel")}`; 

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: "2rem" }}>
        <CardPromotorPlus />
      </Container>
      <Footer />
      {/* Botón flotante Fab */}
      <Fab
        onClick={handleWhatsAppRedirect}
        variant="extended"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
          background: "#43CD66",
          color: "#fff",
        }}
      >
        <WhatsAppIcon sx={{ mr: 1 }} />
        {t("whatsapp.text")}
      </Fab>
    </>
  );
};

export default Promotorplus;
