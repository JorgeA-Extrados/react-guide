import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { CodeBlock } from "../custom/codeBlock";
import AOS from "aos";
import "aos/dist/aos.css";

const Animacion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  const exampleCode = `
    npm install aos --save      
  `;

  const exampleCode2 = `
    export default defineConfig({
        plugins: [react()],
        optimizeDeps: {
            include: ["aos", "aos/dist/aos.css"]
        },
    })      
  `;

  const exampleCode3 = `
        import AOS from "aos";
        import "aos/dist/aos.css";

        //Inicializamos con un useEffect
        useEffect(() => {
            AOS.init();
        }, []);

        // Implementamos agregando la clase
          <Box
            data-aos="fade-up"
            component="img"
            src="/static/agro-1.jpg"
            alt="Semicírculo decorativo"
            sx={{
              padding: 2,
              width: { xs: "100%", md: "45%" },
              marginRight: { xs: "7%", md: 0 },
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              marginTop: 2,
            }}
          ></Box>
  `;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }}>
        <Typography className="description-title">
          AOS - Animate On Scroll Library
        </Typography>
        <Typography className="main-title">
          AOS (Animate On Scroll) es una librería que permite agregar
          animaciones a elementos de una página React cuando aparecen en
          pantalla durante el desplazamiento. Se integra fácilmente con npm
          install aos, y permite configuraciones como duración, retraso y tipo
          de animación (fade, slide, zoom, entre otros). Mejora la experiencia
          de usuario agregando efectos visuales sin afectar el rendimiento, ya
          que las animaciones se activan solo cuando los elementos entran en el
          viewport. <br />
          <a
            href="https://michalsnik.github.io/aos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver documentación oficial
          </a>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: 2,
          }}
        >
          {/* Primer Box */}
          <Box
            data-aos="fade-up"
            component="img"
            src="/static/agro-1.jpg"
            alt="Semicírculo decorativo"
            sx={{
              padding: 2,
              width: { xs: "100%", md: "45%" },
              marginRight: { xs: "7%", md: 0 },
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              marginTop: 2,
            }}
          ></Box>
          {/* Primer Box */}
          <Box
            data-aos="fade-down"
            component="img"
            src="/static/agro-1.jpg"
            alt="Semicírculo decorativo"
            sx={{
              padding: 2,
              width: { xs: "100%", md: "45%" },
              marginRight: { xs: "7%", md: 0 },
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              marginTop: 2,
            }}
          ></Box>
          {/* Primer Box */}
          <Box
            data-aos="fade-right"
            component="img"
            src="/static/agro-1.jpg"
            alt="Semicírculo decorativo"
            sx={{
              padding: 2,
              width: { xs: "100%", md: "45%" },
              marginRight: { xs: "7%", md: 0 },
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              marginTop: 2,
            }}
          ></Box>
          {/* Primer Box */}
          <Box
            data-aos="fade-up-left"
            component="img"
            src="/static/agro-1.jpg"
            alt="Semicírculo decorativo"
            sx={{
              padding: 2,
              width: { xs: "100%", md: "45%" },
              marginRight: { xs: "7%", md: 0 },
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              marginTop: 2,
            }}
          ></Box>
          {/* Primer Box */}
          <Box
            data-aos="flip-left"
            component="img"
            src="/static/agro-1.jpg"
            alt="Semicírculo decorativo"
            sx={{
              padding: 2,
              width: { xs: "100%", md: "45%" },
              marginRight: { xs: "7%", md: 0 },
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              marginTop: 2,
            }}
          ></Box>
        </Box>
        <Typography className="main-title" sx={{ fontWeight: "bold" }}>
          A continuación se muestra su implementación en un proyecto real. Para
          mayor profundización ver el código fuente.
        </Typography>

        <Typography className="main-title">
          Instalamos la libreria mediante el comando npm
        </Typography>
        <CodeBlock code={exampleCode} />
        <Typography className="main-title">
          Configuramos el archivo vite.config.js
        </Typography>
        <CodeBlock code={exampleCode2} />
        <Typography className="main-title">
          Lo implementamos en el componente deseado
        </Typography>
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

export default Animacion;
