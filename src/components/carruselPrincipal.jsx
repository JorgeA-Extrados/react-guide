import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";

const CarruselPrincipal = () => {
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

  return (
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
  );
};

export default CarruselPrincipal;
