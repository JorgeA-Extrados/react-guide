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
      description:
        "Subida, almacenamiento y gestión de imágenes en Firebase Storage dentro de una aplicación React.",
      rute: "/firebase-img",
    },
    // {
    //   title: "Login",
    //   description: "Autenticación y gestión de tokens para sesiones seguras.",
    //   rute: "/manejo-token",
    // },
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
