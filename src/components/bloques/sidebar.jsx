import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Drawer,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { CodeBlock } from "../custom/codeBlock";
import { Home, Settings, Logout, Menu } from "@mui/icons-material";

const Sidebar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  //Sidebar
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
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
    // <Grid2 sx={{ display: "flex" }}>
    //   <Grid2 style={{ display: "flex" }}>
    //     {/* Botón de menú */}
    //     <IconButton onClick={toggleDrawer} style={{ margin: "10px" }}>
    //       <Menu />
    //     </IconButton>

    //     {/* Drawer de Material UI */}
    //     <Drawer variant="persistent" open={open} anchor="left">
    //       <List style={{ width: open ? 250 : 60, transition: "width 0.3s" }}>
    //         <ListItem button>
    //           <ListItemIcon>
    //             <Home />
    //           </ListItemIcon>
    //           {open && <ListItemText primary="Inicio" />}
    //         </ListItem>
    //         <ListItem button>
    //           <ListItemIcon>
    //             <Settings />
    //           </ListItemIcon>
    //           {open && <ListItemText primary="Configuración" />}
    //         </ListItem>
    //         <ListItem button>
    //           <ListItemIcon>
    //             <Logout />
    //           </ListItemIcon>
    //           {open && <ListItemText primary="Salir" />}
    //         </ListItem>
    //       </List>
    //     </Drawer>
    //   </Grid2>
    //   <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }} style={{ marginLeft: "260px", padding: "20px" }}>
    //     <Typography className="description-title">Sidebar </Typography>
    //     <Typography className="main-title">
    //       Este sidebar estilo admin está diseñado en React con Vite y Material
    //       UI. Implementa un Drawer persistente que se puede expandir y contraer
    //       mediante un botón de menú (IconButton). Cuenta con una lista de
    //       opciones de navegación (List) donde cada elemento (ListItem) incluye
    //       un ícono y un texto descriptivo. La animación de apertura y cierre
    //       proporciona una experiencia de usuario fluida. El sidebar se puede
    //       personalizar fácilmente agregando nuevas opciones de menú o ajustando
    //       el tamaño del panel. Su diseño es responsive y puede integrarse en
    //       dashboards administrativos o aplicaciones web con facilidad.
    //     </Typography>
    //     <Typography className="main-title" sx={{ fontWeight: "bold" }}>
    //       A continuación se muestra su implementación en un proyecto real. Para
    //       mayor profundización ver el código fuente.
    //     </Typography>

    //     <IconButton
    //       onClick={handleBack}
    //       sx={{
    //         position: "absolute",
    //         top: 10,
    //         left: 10,
    //         backgroundColor: "rgba(0,0,0,0.1)",
    //         "&:hover": { backgroundColor: "rgba(0,0,0,0.2)" },
    //       }}
    //     >
    //       <ArrowBackIcon />
    //     </IconButton>
    // <CodeBlock code={exampleCode} />
    //   </Container>
    // </Grid2>
    <Grid2 sx={{ display: "flex" }}>
      {/* Contenedor del Sidebar */}
      <Grid2 sx={{ display: "flex" }}>
        <Drawer
          variant="persistent"
          open={open}
          anchor="left"
          sx={{
            "& .MuiDrawer-paper": {
              width: open ? 250 : 60, // Cambia el ancho dependiendo de si está abierto o cerrado
              transition: "width 0.3s", // Transición suave al expandirse o contraerse
              overflowX: "hidden",
            },
          }}
        >
          {/* Botón de menú dentro del Drawer */}
          <IconButton
            onClick={toggleDrawer}
            sx={{
              margin: "10px",
              background: "#000",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1201,
            }}
          >
            <Menu sx={{ color: "#fff" }} />
          </IconButton>

          {/* Lista de elementos dentro del Drawer */}
          <List sx={{ marginTop: "40px" }}>
            {" "}
            {/* Aseguramos que los elementos estén debajo del botón de menú */}
            <ListItem button onClick={() => navigate("/")}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              {open && <ListItemText primary="Inicio" />}
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              {open && <ListItemText primary="Configuración" />}
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              {open && <ListItemText primary="Salir" />}
            </ListItem>
          </List>
        </Drawer>
      </Grid2>

      {/* Contenido principal */}
      <Container
        sx={{
          overflow: "hidden",
          paddingBottom: "2rem",
          transition: "margin-left 0.3s", // Transición para ajustar el contenido cuando el Drawer se abre/cierra
          marginLeft: open ? "260px" : "70px", // Asegura que el contenido se desplace con el Drawer
          padding: "20px",
        }}
      >
        <Typography className="description-title">Sidebar </Typography>
        <Typography className="main-title">
          Este sidebar estilo admin está diseñado en React con Vite y Material
          UI. Implementa un Drawer persistente que se puede expandir y contraer
          mediante un botón de menú (IconButton). Cuenta con una lista de
          opciones de navegación (List) donde cada elemento (ListItem) incluye
          un ícono y un texto descriptivo. La animación de apertura y cierre
          proporciona una experiencia de usuario fluida. El sidebar se puede
          personalizar fácilmente agregando nuevas opciones de menú o ajustando
          el tamaño del panel. Su diseño es responsive y puede integrarse en
          dashboards administrativos o aplicaciones web con facilidad.
        </Typography>
        <Typography className="main-title" sx={{ fontWeight: "bold" }}>
          A continuación se muestra su implementación en un proyecto real. Para
          mayor profundización ver el código fuente.
        </Typography>
        <CodeBlock code={exampleCode} />
      </Container>
    </Grid2>
  );
};

export default Sidebar;
