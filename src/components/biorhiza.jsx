import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Biorhiza = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography className="promotor-title">
        {t("biorhiza.title")} <br /> {t("biorhiza.sub-title")}
      </Typography>
      {/* <Typography className="promotor-text">{t("biorhiza.text")}</Typography> */}
      <Typography
        className="promotor-text"
        dangerouslySetInnerHTML={{
          __html: t("biorhiza.text"),
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 2,
        }}
      >
        {/* Primer Box */}
        <Box
          component="img"
          src="/static/agro-1.jpg"
          alt="Semicírculo decorativo"
          sx={{
            padding: 2,
            width: { xs: "100%", md: "45%" },
            marginRight: { xs: "7%", md: 0 },
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        ></Box>

        {/* Segundo Box */}
        <Box
          sx={{
            padding: 2,
            width: { xs: "90%", md: "45%" },
            marginRight: { xs: "7%", md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            className="promotor-text-card"
            dangerouslySetInnerHTML={{
              __html: `
                <span style="font-weight: bold; color: #598428;">
                  ${t("biorhiza.title-list")}
                  <br />
                </span>
                <ul>
                  <li>${t("biorhiza.1-list")}</li>
                  <li>${t("biorhiza.2-list")}</li>
                  <li>${t("biorhiza.3-list")}</li>
                  <li>${t("biorhiza.4-list")}</li>
                  ${
                    t("biorhiza.5-list") !== " " ? `<li>${t("biorhiza.5-list")}</li>` : ""
                  }
                </ul>
              `,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Biorhiza;
