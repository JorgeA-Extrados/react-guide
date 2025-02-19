import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CodeBlock } from "../custom/codeBlock";

const Cards = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  const exampleCode = `
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 2,
        }}
      >
        {/* Primer Box */}
        <Box
          component="img"
          src="/static/agro-1.jpg"
          alt="Semicírculo decorativo"
          sx={{
            padding: 2,
            width: { xs: "100%", md: "45%" },
            marginRight: { xs: "7%", md: 0 },
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        ></Box>

        {/* Segundo Box */}
        <Box
          sx={{
            padding: 2,
            width: { xs: "100%", md: "45%" },
            marginRight: { xs: "7%", md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography className="community-text-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae soluta corrupti animi, quibusdam suscipit vel, dolorum
            quos cum nam error quas. Dicta, soluta nesciunt. Nulla minima culpa
            ipsam obcaecati provident.
          </Typography>
          <Typography className="community-text-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae soluta corrupti animi, quibusdam suscipit vel, dolorum
            quos cum nam error quas. Dicta, soluta nesciunt. Nulla minima culpa
            ipsam obcaecati provident.
          </Typography>
          <Typography className="community-text-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae soluta corrupti animi, quibusdam suscipit vel, dolorum
            quos cum nam error quas. Dicta, soluta nesciunt. Nulla minima culpa
            ipsam obcaecati provident.
          </Typography>
        </Box>
      </Box>
`;
  return (
    <Container sx={{ marginBottom: 5 }}>
      {/* Botón de volver atrás */}
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
      <Typography className="description-title">Cards</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 2,
        }}
      >
        {/* Primer Box */}
        <Box
          component="img"
          src="/static/agro-1.jpg"
          alt="Semicírculo decorativo"
          sx={{
            padding: 2,
            width: { xs: "100%", md: "45%" },
            marginRight: { xs: "7%", md: 0 },
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        ></Box>

        {/* Segundo Box */}
        <Box
          sx={{
            padding: 2,
            width: { xs: "100%", md: "45%" },
            marginRight: { xs: "7%", md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography className="community-text-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae soluta corrupti animi, quibusdam suscipit vel, dolorum
            quos cum nam error quas. Dicta, soluta nesciunt. Nulla minima culpa
            ipsam obcaecati provident.
          </Typography>
          <Typography className="community-text-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae soluta corrupti animi, quibusdam suscipit vel, dolorum
            quos cum nam error quas. Dicta, soluta nesciunt. Nulla minima culpa
            ipsam obcaecati provident.
          </Typography>
          <Typography className="community-text-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae soluta corrupti animi, quibusdam suscipit vel, dolorum
            quos cum nam error quas. Dicta, soluta nesciunt. Nulla minima culpa
            ipsam obcaecati provident.
          </Typography>
        </Box>
      </Box>

      <Grid2
        container
        spacing={3}
        justifyContent="center"
        sx={{ marginTop: 4 }}
      >
        {/* Card 1 */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 345,
              background: "rgba(129, 129, 129, 0.1)",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be • nev • o • lent
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid2>

        {/* Card 2 */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 345,
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image="https://www.ecoavant.com/uploads/s1/28/20/68/imagen-de-que-es-la-naturaleza.webp"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid2>

        {/* Card 3 */}
        <Grid2 item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ color: "text.secondary" }}
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                  <SkipPreviousIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <SkipNextIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://www.ecoavant.com/uploads/s1/28/20/68/imagen-de-que-es-la-naturaleza.webp"
              alt="Live from space album cover"
            />
          </Card>
        </Grid2>
      </Grid2>

      <Typography className="main-title">
        A continuación se deja el código de la primer card, el código se Se
        encuentra con React y Material UI. Para mayor profundización de los
        estilos y funciones ver el código fuente.
      </Typography>

      <CodeBlock code={exampleCode} />
    </Container>
  );
};

export default Cards;
