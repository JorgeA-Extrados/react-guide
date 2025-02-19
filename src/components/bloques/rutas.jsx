import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container, IconButton, Typography } from "@mui/material";
import { CodeBlock } from "../custom/codeBlock";

const Rutas = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  const exampleCode = `
        import React from "react";
        import {
        BrowserRouter as Router,
        Routes,
        Route,
        } from "react-router";
        import ErrorNotFound from "../views/error/error404";
        import Home from "../views/home";
        import Navbar from "../components/bloques/navbar";
        import Cards from "../components/bloques/cards";
        import Tables from "../components/bloques/table";
        import Carrusel from "../components/bloques/carrusel";
        import Rutas from "../components/bloques/rutas";

        const AppRoutes = () => {
        return (
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/table" element={<Tables />} />
            <Route path="/carrusel" element={<Carrusel />} />
            <Route path="/rutas" element={<Rutas />} />

            {/* Ruta 404 */}
            <Route path="*" element={<ErrorNotFound />} />
            </Routes>
        );
        };

        const App = () => (
        <Router>
            <AppRoutes />
        </Router>
        );

        export default App;
    `;

  return (
    <>
      <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }}>
        <Typography className="description-title">React Router</Typography>
        <Typography className="main-title">
          React Router es un enrutador multiestrategia para React que cierra la
          brecha entre React 18 y React 19. Puedes usarlo al máximo como un
          marco de React o al menos como una biblioteca con tu propia
          arquitectura. <br />
          <a
            href="https://reactrouter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver documentación oficial
          </a>
        </Typography>
        <Typography className="main-title" sx={{fontWeight: "bold"}}>
        A continuación se muestra su implementación en un proyecto real. Para mayor profundización ver el código fuente.
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
      </Container>
    </>
  );
};

export default Rutas;
