import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const CardPromotorPlus = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography className="promotor-title">
        {t("promotor.title")}
        <br /> {t("promotor.sub-title")}
        <br /> {t("promotor.sub-title-2")}
      </Typography>
      <Typography
        className="promotor-text"
        dangerouslySetInnerHTML={{
          __html: t("promotor.text"),
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
            {t("promotor.1-list") === " " ? (
              <>{t("promotor.title-list")}</>
            ) : (
              <>
                <span style={{ fontWeight: "bold", color: "#598428 " }}>
                  {t("promotor.title-list")}
                  <br />
                </span>
                <ul>
                  <li>{t("promotor.1-list")}</li>
                  <li>{t("promotor.2-list")}</li>
                  <li>{t("promotor.3-list")}</li>
                  <li>{t("promotor.4-list")}</li>
                  <li>{t("promotor.5-list")}</li>
                </ul>
              </>
            )}
          </Typography> */}
          <Typography
            className="promotor-text-card"
            dangerouslySetInnerHTML={{
              __html:
                t("promotor.1-list") === " "
                  ? t("promotor.title-list")
                  : `
            <span style="font-weight: bold; color: #598428;">
              ${t("promotor.title-list")}
            </span>
            <ul>
              <li>${t("promotor.1-list")}</li>
              <li>${t("promotor.2-list")}</li>
              <li>${t("promotor.3-list")}</li>
              <li>${t("promotor.4-list")}</li>
              <li>${t("promotor.5-list")}</li>
            </ul>
          `,
            }}
          />
          {/* <Typography className="promotor-text-card">
            {t("promotor.1-list") === " " ? (
              <>{t("promotor.text-2")}</>
            ) : (
              <>
                <span style={{ fontWeight: "bold", color: "#598428 " }}>
                  {t("promotor.text-2")} <br />
                </span>{" "}
                {t("promotor.text-3")}
              </>
            )}
          </Typography> */}
          <Typography
            className="promotor-text-card"
            dangerouslySetInnerHTML={{
              __html:
                t("promotor.1-list") === " "
                  ? t("promotor.text-2")
                  : `
            <span style="font-weight: bold; color: #598428;">
              ${t("promotor.text-2")}
            </span><br />
            ${t("promotor.text-3")}
          `,
            }}
          />
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
          {/* <Typography className="promotor-text-card">
            {t("promotor.1-list") === " " ? (
              <>
                {t("promotor.text-3")} <br /> {t("promotor.text-4")}
              </>
            ) : (
              <>
                <span style={{ fontWeight: "bold", color: "#598428 " }}>
                  {t("promotor.text-4")}
                  <br />{" "}
                </span>{" "}
                {t("promotor.text-5")}
              </>
            )}
          </Typography> */}
          <Typography
            className="promotor-text-card"
            dangerouslySetInnerHTML={{
              __html:
                t("promotor.1-list") === " "
                  ? `${t("promotor.text-3")} <br /> ${t("promotor.text-4")}`
                  : `
            <span style="font-weight: bold; color: #598428;">
              ${t("promotor.text-4")}
            </span><br />
            ${t("promotor.text-5")}
          `,
            }}
          />
          {/* <Typography className="promotor-text-card">
            <span style={{ fontWeight: "bold", color: "#598428 " }}>
              {t("promotor.text-6")}
              <br />{" "}
            </span>{" "}
            {t("promotor.text-7")}
          </Typography> */}
          <Typography
            className="promotor-text-card"
            dangerouslySetInnerHTML={{
              __html: `
        <span style="font-weight: bold; color: #598428;">
          ${t("promotor.text-6")}
        </span><br />
        ${t("promotor.text-7")}
      `,
            }}
          />
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
    </Box>
  );
};

export default CardPromotorPlus;
