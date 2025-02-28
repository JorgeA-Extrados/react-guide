import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, IconButton, Typography, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CodeBlock } from "../custom/codeBlock";

const Carrusel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const settingsSecondary = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Para pantallas pequeñas (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  const exampleCode = `
  <div
    className="slider-container"
    style={{ marginTop: "2rem", maxWidth: "100%", overflow: "hidden" }}
  >
        <Slider {...settings}>
          <div>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "400px",
              }}
            >
              <Box
                component="img"
                src="/static/agro-1.jpg"
                alt="Imagen 1"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  backgroundColor: "rgba(89, 132, 40, 0.5)",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Typography className="carruselPrincipal-text">
                  AGROTECH-BIO
                </Typography>
              </Box>
            </Box>
          </div>

          <div>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "400px",
              }}
            >
              <Box
                component="img"
                src="/static/agro-2.jpeg"
                alt="Imagen 2"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  backgroundColor: "rgba(89, 132, 40, 0.5)",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Typography className="carruselPrincipal-text">
                  AGROTECH-BIO
                </Typography>
              </Box>
            </Box>
          </div>

          <div>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "400px",
              }}
            >
              <Box
                component="img"
                src="/static/agro-3.jpeg"
                alt="Imagen 3"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  backgroundColor: "rgba(89, 132, 40, 0.5)",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Typography className="carruselPrincipal-text">
                  AGROTECH-BIO
                </Typography>
              </Box>
            </Box>
          </div>
        </Slider>
  </div>
  `;

  return (
    <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }}>
      <Typography className="description-title">Carrusel</Typography>
      <Typography className="main-title">
        React Slick es una popular biblioteca para React que permite implementar
        carruseles y sliders de manera sencilla y altamente personalizable. Se
        basa en la librería Slick Carousel de jQuery, pero está adaptada para
        React sin necesidad de dependencias adicionales de jQuery. <br />
        <a
          href="https://react-slick.neostack.com/docs/get-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver documentación oficial
        </a>
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
      <div
        className="slider-container"
        style={{ marginTop: "2rem", maxWidth: "100%", overflow: "hidden" }}
      >
        <Slider {...settings}>
          <div>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "400px",
              }}
            >
              <Box
                component="img"
                src="/static/agro-1.jpg"
                alt="Imagen 1"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  backgroundColor: "rgb(3, 74, 150)",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Typography className="carruselPrincipal-text">
                  EXTRADOS Software Technology
                </Typography>
              </Box>
            </Box>
          </div>

          <div>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "400px",
              }}
            >
              <Box
                component="img"
                src="/static/agro-2.jpeg"
                alt="Imagen 2"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  backgroundColor: "rgb(3, 74, 150)",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Typography className="carruselPrincipal-text">
                  EXTRADOS Software Technology
                </Typography>
              </Box>
            </Box>
          </div>

          <div>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "400px",
              }}
            >
              <Box
                component="img"
                src="/static/agro-3.jpeg"
                alt="Imagen 3"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  backgroundColor: "rgb(3, 74, 150)",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Typography className="carruselPrincipal-text">
                  EXTRADOS Software Technology
                </Typography>
              </Box>
            </Box>
          </div>
        </Slider>
      </div>

      {/* SEGUNDO CARRUSEL (3 elementos por pantalla) */}
      <Typography className="description-title" sx={{ marginTop: "3rem" }}>
        Carrusel Secundario
      </Typography>

      <Box
        className="slider-container"
        sx={{ marginTop: "2rem", overflow: "hidden" }}
      >
        <Slider {...settingsSecondary}>
          {[
            "/static/agro-4.jpeg",
            "/static/agro-5.jpeg",
            "/static/agro-6.jpeg",
            "/static/agro-3.jpeg",
          ].map((src, index) => (
            <Box key={index} sx={{ padding: "0 10px" }}>
              <Box
                sx={{ position: "relative", width: "100%", height: "300px" }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    backgroundColor: "rgba(89, 132, 40, 0.5)",
                    color: "white",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <Typography className="carruselSecundario-text">
                    Elemento {index + 1}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      <Typography className="main-title">
        A continuación se deja el código del primer carrusel, el código se Se
        encuentra con React y Material UI. Para mayor profundización de los
        estilos y funciones ver el código fuente.
      </Typography>

      <CodeBlock code={exampleCode} />
    </Container>
  );
};

export default Carrusel;
