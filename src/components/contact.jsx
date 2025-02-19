import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

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

    if (!formData.nombre) newErrors.nombre = t("contact.error-1");

    if (!formData.email) {
      newErrors.email = t("contact.error-2");
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t("contact.error-invalid-email"); // Mensaje de error si el email no es válido
    }

    if (!formData.telefono) newErrors.telefono = t("contact.error-3");

    if (!formData.motivo) newErrors.motivo = t("contact.error-4");

    if (!formData.mensaje) newErrors.mensaje = t("contact.error-5");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppRedirect = () => {
    if (!validateForm()) return;
    const { nombre, email, telefono, motivo, mensaje } = formData;

    const whatsappMessage = `
        *${t("contact.what")}*

        ${t("contact.what-1")}

        *${t("contact.what-2")}* ${nombre}
        *${t("contact.what-3")}* ${email}
        *${t("contact.what-4")}* ${telefono}

        *${t("contact.what-5")}* ${motivo}

        *${t("contact.what-6")}* ${mensaje}

        ${t("contact.what-7")}
    `.replace(/\n/g, "%0A");

    const whatsappURL = `https://wa.me/${t("contact.what-tel")}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      motivo: "",
      mensaje: "",
    });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@agrotech-bio.com";
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
          <Typography className="contact-title">
            {t("contact.title")}
          </Typography>
          <Typography className="contact-text">{t("contact.text")}</Typography>
          <Link
            className="contact-text-email"
            href="#"
            onClick={handleEmailClick}
            underline="none"
            style={{
              color: "blue",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {t("contact.info-email")}
          </Link>
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
                  label={t("contact.nombre")}
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
                  label={t("contact.email")}
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
                  label={t("contact.telefono")}
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
                  label={t("contact.consulta")}
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
                  label={t("contact.mensaje")}
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
                    onClick={handleWhatsAppRedirect}
                  >
                    <WhatsAppIcon /> {t("contact.enviar")}
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Contact;
