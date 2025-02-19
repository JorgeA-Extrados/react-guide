import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box component="footer" className="footer">
      <Grid2
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: 2, 
        }}
      >
        <Typography className="footer-text">©2019 by Agrotech-Bio.</Typography>
        <Typography>
          <Link
              onClick={() => window.open("https://www.extrados.ar/", "_blank")}
              className="footer-web"
              style={{ cursor: "pointer" }}
          >
            &nbsp; {t("footer.text")}
          </Link>
        </Typography>
      </Grid2>
    </Box>
  );
};

export default Footer;
