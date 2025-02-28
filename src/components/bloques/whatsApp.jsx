import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  createTheme,
  Fab,
  IconButton,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { CodeBlock } from "../custom/codeBlock";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  const exampleCode = `
         //Solo abrir WhatsApp
            const whatsappURL = "https://wa.me/5493834400061";
            window.open(whatsappURL, "_blank");
    
         //Agregando mensaje predeterminado
            const whatsappMessage = "Soy un mensaje predeterminado";
            const whatsappURL = "https://wa.me/5493834400061?text=$ {whatsappMessage}";
            window.open(whatsappURL, "_blank");
    `;

  const handleWhatsAppRedirect = () => {
    const whatsappURL = `https://wa.me/5493834400061`;

    window.open(whatsappURL, "_blank");
  };

  //Formulario de contacto
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    motivo: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nombre) newErrors.nombre = "El Nombre es obligatorio";

    if (!formData.email) {
      newErrors.email = "El Correo es obligatorio";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor, ingrese un correo válido."; // Mensaje de error si el email no es válido
    }

    if (!formData.telefono) newErrors.telefono = "El Teléfono es obligatorio";

    if (!formData.motivo)
      newErrors.motivo = "El Motivo de la Consulta es obligatorio";

    if (!formData.mensaje) newErrors.mensaje = "El mensaje es obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppRedirect2 = () => {
    if (!validateForm()) return;
    const { nombre, email, telefono, motivo, mensaje } = formData;

    const whatsappMessage = `    
            *Nombre* ${nombre}
            *Email* ${email}
            *Telefono* ${telefono}
    
            *Motivo* ${motivo}
    
            *Mensaje* ${mensaje}
        `.replace(/\n/g, "%0A");

    const whatsappURL = `https://wa.me/5493834400061?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      motivo: "",
      mensaje: "",
    });
  };

  const customTheme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInput-underline:after": {
              borderBottomColor: "#598428",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#598428",
            },
          },
        },
      },
    },
  });

  return (
    <>
      <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }}>
        <Typography className="description-title">WhatsApp</Typography>
        <Typography className="main-title">
          WhatsApp puede integrarse en una aplicación React mediante enlaces
          directos con https://wa.me/, permitiendo a los usuarios iniciar
          conversaciones sin necesidad de agregar contactos manualmente.
        </Typography>

        <ThemeProvider theme={customTheme}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
            id="contacto"
          >
            {/* Primer Box */}
            <Box
              sx={{
                padding: 2,
                width: { xs: "100%", sm: "45%" },
                marginRight: { xs: "9%", sm: 0 },
                marginBottom: { xs: 2, sm: 0 },
              }}
            >
              <Typography className="contact-title">CONTÁCTENOS</Typography>
              <Typography className="contact-text">
                Complete el siguiente formulario para que nuestro equipo se
                comunique con usted.
              </Typography>
            </Box>

            {/* Segundo Box */}
            <Box
              sx={{
                padding: 2,
                width: { xs: "100%", sm: "45%" },
                marginRight: { xs: "16%", sm: 0 },
              }}
            >
              <Card elevation={3} style={{ padding: "1rem", width: "100%" }}>
                <CardContent>
                  <Box component="form" noValidate autoComplete="off">
                    <TextField
                      label="Nombre"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      error={!!errors.nombre}
                      helperText={errors.nombre}
                    />
                    <TextField
                      label="Email"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                    <TextField
                      label="Teléfono"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      name="telefono"
                      type="number"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      error={!!errors.telefono}
                      helperText={errors.telefono}
                    />
                    <TextField
                      label="Motivo de consulta"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      name="motivo"
                      value={formData.motivo}
                      onChange={handleInputChange}
                      error={!!errors.motivo}
                      helperText={errors.motivo}
                    />
                    <TextField
                      label="Mensaje"
                      variant="standard"
                      fullWidth
                      margin="normal"
                      multiline
                      rows={4}
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      error={!!errors.mensaje}
                      helperText={errors.mensaje}
                    />
                    <Box mt={2}>
                      <Button
                        className="contact-btn"
                        fullWidth
                        onClick={handleWhatsAppRedirect2}
                      >
                        <WhatsAppIcon /> Enviar
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </ThemeProvider>

        <Typography className="main-title" sx={{ fontWeight: "bold" }}>
          A continuación se muestra su implementación en un proyecto real. Para
          mayor profundización ver el código fuente. Se van a mostrar dos
          opciones una implementando un formulario y otro con un boton flotante
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

        <Fab
          onClick={handleWhatsAppRedirect}
          variant="extended"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1000,
            background: "#43CD66",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.84)" },
            color: "#fff",
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Container>
    </>
  );
};

export default WhatsApp;
