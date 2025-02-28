import {
  Box,
  Button,
  Container,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { CodeBlock } from "../custom/codeBlock";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTranslation } from "react-i18next";

const Traduccion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const exampleCode1 = `
        //Configuracion
        i18n.use(initReactI18next).init({
        resources: {
            es: { translation: es },
            pt: { translation: pt },
        },
        lng: "es", // Idioma por defecto
        fallbackLng: "es",
        interpolation: {
            escapeValue: false,
        },
        });

        export default i18n;
      `;

  const exampleCode2 = `
        //Implementacion

        //Se puede implemente de dos formas. La primera toma los estilos generados en el json
          <Typography
            className="products-text"
            dangerouslySetInnerHTML={{
              __html: t("products.description.text1", {
                brand: t("products.highlights.brand"),
                pgpr: t("products.highlights.pgpr"),
              }),
            }}
          />
        
        //La segundo solamente toma el texto dentro del json
        <Typography className="main-title" sx={{ fontWeight: "bold" }}>
          {t("nav.es")}
        </Typography>
      `;

  const exampleCode3 = `
        //Se generan un json por idioma en este caso son dos

        //Español
        "nav": {
            "es": "Español",
            "pt": "Portugues"
        },

        //Portugues
        "nav": {
            "es": "Espanhol",
            "pt": "Português"
        },
      `;

  return (
    <>
      <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }}>
        <Typography className="description-title">
          Traductor React i18next
        </Typography>
        <Typography className="main-title">
          Es una librería que nos permite traducir el contenido de nuestra web,
          es flexible y muy utilizado en la comunidad. <br />
          <a
            href="https://react.i18next.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver documentación oficial
          </a>
        </Typography>
        <Typography className="main-title" sx={{ fontWeight: "bold" }}>
          A continuación se muestra su implementación en un proyecto real.
        </Typography>
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          spacing={2} // Espacio entre los botones
        >
          <Grid2>
            <Button
              className="button-user-data"
              onClick={() => changeLanguage("es")}
            >
              {t("nav.es")}
            </Button>
          </Grid2>
          <Grid2>
            <Button
              className="button-user-data"
              onClick={() => changeLanguage("pt")}
            >
              {t("nav.pt")}
            </Button>
          </Grid2>
        </Grid2>

        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            p: 4,
            my: 2,
            borderRadius: 2,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.81)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
              zIndex: 1,
            }}
          />
          <Typography
            className="products-text"
            dangerouslySetInnerHTML={{
              __html: t("products.description.text1", {
                brand: t("products.highlights.brand"),
                pgpr: t("products.highlights.pgpr"),
              }),
            }}
          />
          <Typography
            className="products-text"
            dangerouslySetInnerHTML={{
              __html: t("products.description.text2", {
                bioestimulacion: t("products.highlights.bioestimulacion"),
                biofertilizacion: t("products.highlights.biofertilizacion"),
                bioproteccion: t("products.highlights.bioproteccion"),
              }),
            }}
          />
          <Typography
            className="products-text"
            dangerouslySetInnerHTML={{
              __html: t("products.description.text3", {
                promotorPlus: t("products.highlights.promotorPlus"),
              }),
            }}
          />
        </Box>
        <Typography className="main-title" sx={{ fontWeight: "bold" }}>
          A continuación se muestra su implementación en un proyecto real. Para
          mayor profundización ver el código fuente.
        </Typography>

        <CodeBlock code={exampleCode1} />
        <br />
        <CodeBlock code={exampleCode2} />
        <br />
        <CodeBlock code={exampleCode3} />

        <IconButton
          onClick={handleBack}
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            backgroundColor: "rgba(0,0,0,0.1)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.2)" },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
      </Container>
    </>
  );
};

export default Traduccion;
