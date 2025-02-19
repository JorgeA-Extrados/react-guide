import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const AminGpbCard = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography className="promotor-title">
        {t("amin.title")}
        <br /> {t("amin.sub-title")}
        <br /> {t("amin.sub-title-2")}
      </Typography>
      {/* <Typography className="promotor-text">{t("amin.text")}</Typography> */}
      <Typography
        className="promotor-text"
        dangerouslySetInnerHTML={{
          __html: t("amin.text"),
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
          {/* <Typography className="promotor-text-card">
            {t("amin.text-2") === " " ? (
              <>
                <span style={{ fontWeight: "bold", color: "#598428 " }}>
                  {t("amin.title-list")}
                  <br />
                </span>
                <ul>
                  <li>{t("amin.1-list")}</li>
                  <li>{t("amin.2-list")}</li>
                  <li>{t("amin.3-list")}</li>
                  <li>{t("amin.4-list")}</li>
                  <li>{t("amin.5-list")}</li>
                  <li>{t("amin.6-list")}</li>
                  <li>{t("amin.7-list")}</li>
                  <li>{t("amin.8-list")}</li>
                </ul>
              </>
            ) : (
              <>
                <span style={{ fontWeight: "bold", color: "#598428 " }}>
                  {t("amin.title-list")}
                  <br />
                </span>
                <ul>
                  <li>{t("amin.1-list")}</li>
                  <li>{t("amin.2-list")}</li>
                  <li>{t("amin.3-list")}</li>
                  <li>{t("amin.4-list")}</li>
                  <li>{t("amin.5-list")}</li>
                </ul>
              </>
            )}
          </Typography> */}
          <Typography
            className="promotor-text-card"
            dangerouslySetInnerHTML={{
              __html:
                t("amin.text-2") === " "
                  ? `
          <span style="font-weight: bold; color: #598428;">
            ${t("amin.title-list")}
            <br />
          </span>
          <ul>
            <li>${t("amin.1-list")}</li>
            <li>${t("amin.2-list")}</li>
            <li>${t("amin.3-list")}</li>
            <li>${t("amin.4-list")}</li>
            <li>${t("amin.5-list")}</li>
            <li>${t("amin.6-list")}</li>
            <li>${t("amin.7-list")}</li>
            <li>${t("amin.8-list")}</li>
          </ul>
        `
                  : `
          <span style="font-weight: bold; color: #598428;">
            ${t("amin.title-list")}
            <br />
          </span>
          <ul>
            <li>${t("amin.1-list")}</li>
            <li>${t("amin.2-list")}</li>
            <li>${t("amin.3-list")}</li>
            <li>${t("amin.4-list")}</li>
            <li>${t("amin.5-list")}</li>
          </ul>
        `,
            }}
          />
          {t("amin.text-2") === " " ? null : (
            <Typography className="promotor-text-card">
              <span style={{ fontWeight: "bold", color: "#598428 " }}>
                {t("amin.text-2")} <br />
              </span>{" "}
              {t("amin.text-3")}
            </Typography>
          )}
        </Box>
      </Box>
      {t("amin.text-2") === " " ? null : (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: 2,
          }}
        >
          {/* Primer Box */}
          <Box
            sx={{
              padding: 2,
              width: { xs: "90%", md: "45%" },
              marginRight: { xs: "7%", md: 0 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography className="promotor-text-card">
              <span style={{ fontWeight: "bold", color: "#598428 " }}>
                {t("amin.text-4")} <br />{" "}
              </span>{" "}
              {t("amin.text-5")}
            </Typography>
            <Typography className="promotor-text-card">
              <span style={{ fontWeight: "bold", color: "#598428 " }}>
                {t("amin.text-6")}
                <br />{" "}
              </span>{" "}
              {t("amin.text-7")}
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
              marginRight: { xs: "7%", md: 0 },
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          ></Box>
        </Box>
      )}
    </Box>
  );
};

export default AminGpbCard;
