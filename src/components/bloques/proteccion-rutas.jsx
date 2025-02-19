import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container, IconButton, Typography } from "@mui/material";
import { CodeBlock } from "../custom/codeBlock";

const ProteccionRutas = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  const exampleCode = `
        //Proteccion de rutas
        import React from "react";
        import { Navigate } from "react-router-dom";


        const isAuthenticated = () => {
        const token = localStorage.getItem("token"); 
        return !!token; 
        };

        const ProtectedRoute = ({ element }) => {
        return isAuthenticated() ? element : <Navigate to="/login" replace />;
        };

        export default ProtectedRoute;
      `;

  const exampleCode2 = `
        //Implementacion
        const AppRoutes = () => {
        return (
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/navbar" element={<Navbar />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/table" element={<Tables />} />
                <Route path="/carrusel" element={<Carrusel />} />
                <Route path="/rutas" element={<Rutas />} />
                <Route path="/traduccion" element={<Traduccion />} />
                <Route path="/material-ui" element={<MaterialUI />} />
                <Route path="/api-calls" element={<ApiCalls />} />
                <Route path="/manejo-token" element={<ManejoToken />} />
                <Route path="/protec-ruter" element={<ProteccionRutas />} />
                {/* Protege las rutas sensibles con el componente ProtectedRoute */}
                <Route
                    path="/account/freelancer"
                    element={<ProtectedRoute element={<Freelancer />} />}
                />
                <Route
                    path="/account/pyme"
                    element={<ProtectedRoute element={<Pyme />} />}
                />

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
        <Typography className="description-title">
          Protección de Rutas
        </Typography>
        <Typography className="main-title">
          La protección de rutas en React se implementa mediante React Router y
          estrategias de autenticación. Esto garantiza que solo los usuarios con
          los permisos adecuados puedan navegar en secciones restringidas de la
          aplicación. <br />
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
        <br />
        <CodeBlock code={exampleCode2} />
      </Container>
    </>
  );
};

export default ProteccionRutas;
