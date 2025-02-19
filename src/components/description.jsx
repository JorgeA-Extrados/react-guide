import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box id="descripcion">
      <Typography className="description-title">
        {t("description.title")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 2,
        }}
        data-aos="fade-right"
      >
        {/* Primer Box */}
        <Box
          component="img"
          src="/static/agro-1.jpg"
          alt="Semicírculo decorativo"
          sx={{
            padding: 2,
            width: { xs: "100%", md: "45%" }, 
            marginRight: {xs: "7%", md: 0},
            borderRadius: "10px", 
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
          }}
        ></Box>

        {/* Segundo Box */}
        <Box
          sx={{
            padding: 2,
            width: { xs: "100%", md: "45%" },
            marginRight: {xs: "7%", md: 0},
            textAlign: { xs: "center", md: "left" }, 
          }}
        >
          <Typography className="community-text-3">
            <span style={{ fontWeight: "bold", color: "#598428 " }}>
              AGROTECH-BIO{" "}
            </span>{" "}
            {t("description.text-1")}
          </Typography>
          <Typography className="community-text-4">
            {t("description.text-2")}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 2,
        }}
        data-aos="fade-left"
      >
        {/* Primer Box */}
        <Box
          sx={{
            padding: 2,
            width: { xs: "100%", md: "45%" },
            marginRight: {xs: "7%", md: 0},
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography className="community-text-3">
            <span style={{ fontWeight: "bold", color: "#598428 " }}>
              AGROTECH-BIO{" "}
            </span>{" "}
            {t("description.text-3")}
          </Typography>
        </Box>

        {/* Segundo Box */}
        <Box
          component="img"
          src="/static/agro-2.jpeg"
          alt="Semicírculo decorativo"
          sx={{
            padding: 2,
            width: { xs: "100%", md: "45%" },
            marginRight: {xs: "7%", md: 0},
            borderRadius: "10px", 
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Description;
