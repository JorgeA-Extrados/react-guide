import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { CodeBlock } from "../custom/codeBlock";

const Architecture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  const exampleCode = `
        //Esquema de carpetas
        - src
            assets
            config
            hooks
            routes
            services
            store
            styles
            theme
            utils
            views
            App.jsx
            index.css
            main.jsx
      `;

  return (
    <>
      <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }}>
        <Typography className="description-title">
          Arquitectura de un Proyecto React
        </Typography>
        <Typography className="main-title">
          Una buena arquitectura en React se basa en la separación de
          responsabilidades mediante componentes reutilizables, gestión de
          estado (Redux, Zustand, Context API) y un sistema de carpetas
          estructurado. Se recomienda dividir el código en capas como
          components, pages, services, hooks y utils para mejorar la
          organización. Además, se pueden implementar patrones como Atomic
          Design para estructurar la UI y facilitar su mantenimiento.
        </Typography>
        <Typography className="main-title" sx={{ fontWeight: "bold" }}>
          A continuación se muestra su implementación en un proyecto real. Para
          mayor profundización ver el código fuente.
        </Typography>

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
        <CodeBlock code={exampleCode} />
        <Typography className="main-title" sx={{ fontWeight: "bold" }}>
          Imagen ilustrativa
        </Typography>
        <Box>
          <CardMedia
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: "auto",
              height: "auto",
              zIndex: 1,
              objectFit: "cover",
              mt: 2,
            }}
            component="img"
            image="/static/arquitectura.png"
          />
        </Box>
      </Container>
    </>
  );
};

export default Architecture;
