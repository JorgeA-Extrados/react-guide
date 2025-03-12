import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid2,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Guide
  const navigate = useNavigate();

  const cardData = [
    {
      title: "Nav",
      description:
        "Componentes y ejemplos de navegación, incluyendo barras de menú y enlaces.",
      rute: "/navbar",
    },
    {
      title: "Cards",
      description:
        "Diseño y personalización de tarjetas para mostrar información de manera organizada.",
      rute: "/cards",
    },
    {
      title: "Tablas",
      description:
        "Ejemplos de tablas interactivas para visualizar datos de forma estructurada.",
      rute: "/table",
    },
    {
      title: "Carrusel",
      description:
        "Ejemplos de tablas interactivas para visualizar datos de forma estructurada.",
      rute: "/carrusel",
    },
    {
      title: "Rutas",
      description:
        "Configuración y manejo de rutas en React utilizando React Router.",
      rute: "/rutas",
    },
    {
      title: "Traducción",
      description:
        "Implementación de internacionalización y traducción en la aplicación.",
      rute: "/traduccion",
    },
    {
      title: "Material UI",
      description:
        "Uso de Material UI para estilizar y mejorar la interfaz de usuario.",
      rute: "/material-ui",
    },
    {
      title: "Llamado de APIs",
      description:
        "Cómo realizar peticiones HTTP a APIs con Axios y manejar respuestas.",
      rute: "/api-calls",
    },
    {
      title: "Manejo de token",
      description: "Autenticación y gestión de tokens para sesiones seguras.",
      rute: "/manejo-token",
    },
    {
      title: "Proteccion de rutas",
      description:
        "Implementación de rutas protegidas en React para restringir el acceso a usuarios autenticados y autorizados.",
      rute: "/protec-ruter",
    },
    {
      title: "WhatsApp",
      description:
        "Integración de WhatsApp en React para enviar mensajes y facilitar la comunicación con usuarios.",
      rute: "/whatsApp",
    },
    {
      title: "Arquitectura del proyecto",
      description:
        "Organización modular del código en React para mejorar mantenibilidad y escalabilidad.",
      rute: "/architecture",
    },
    {
      title: "Firebase Imagenes",
      // description:
      //   "Subida, almacenamiento y gestión de imágenes en Firebase Storage dentro de una aplicación React.",
      description:
        "No es posible la utilizacion ya que para el servicio solicitado me pide cambio de plan a uno pago.",
      rute: "#",
    },
    {
      title: "AOS - Animate On Scroll Library",
      description:
        "Librería en React para animar elementos al hacer scroll, mejorando la experiencia visual del usuario.",
      rute: "/aos",
    },
    {
      title: "Signup",
      description:
        "Registro de nuevos usuarios en React mediante formularios validados y almacenamiento seguro de credenciales.",
      rute: "/signup",
    },
    {
      title: "Login",
      description:
        "Proceso de autenticación en React que permite a los usuarios acceder a la aplicación mediante credenciales seguras.",
      rute: "/login",
    },
    {
      title: "IA",
      description:
        "La implementación de IA en React permite integrar modelos de inteligencia artificial para mejorar la experiencia del usuario.",
      rute: "/ia",
    },
    {
      title: "Cohere AI",
      description:
        "Cohere AI es una plataforma de inteligencia artificial que proporciona modelos de procesamiento de lenguaje natural (NLP).",
      rute: "/cohereAI",
    },
    {
      title: "Redux Toolkit",
      description:
        "Redux Toolkit es la biblioteca oficial de Redux que simplifica la gestión del estado global en aplicaciones de React.",
      rute: "/redux-toolkit",
    },
    {
      title: "Sidebar",
      description:
        "Un sidebar estilo admin en React con Vite y Material UI, con un menú lateral desplegable que permite navegar entre diferentes secciones del panel de administración.",
      rute: "/sidebar",
    },
    // {
    //   title: "Chat",
    //   description: "Autenticación y gestión de tokens para sesiones seguras.",
    //   rute: "/manejo-token",
    // },
  ];

  const handleButton = (ruta) => {
    navigate(ruta);
  };

  return (
    <>
      <Container>
        <Typography sx={{ mt: 5 }} className="description-title">
          Guia de React
        </Typography>
        <Typography className="main-title">
          Este proyecto tiene como objetivo establecer una guía clara para el
          desarrollo de nuestra aplicación en React, asegurando la
          estandarización de las funcionalidades, la coherencia en el código y
          la optimización del trabajo en equipo.
        </Typography>
        <Grid2 container spacing={3} justifyContent="center" sx={{ mb: 3 }}>
          {cardData.map((card, index) => (
            <Grid2 item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  height: 270,
                  mx: "auto",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardContent>
                  <Typography className="title-cards">{card.title}</Typography>
                  <Typography className="text-cards">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    className="button-user-data"
                    onClick={() => handleButton(card.rute)}
                  >
                    Ver más
                  </Button>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </>
  );
};

export default Home;
