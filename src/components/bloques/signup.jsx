import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { createUser } from "../../services/userService";

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  //Signup
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState("success");
  const [isLoadind, setIsLoadin] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    setIsLoadin(true);
    //  debugger;
    localStorage.clear();
    e.preventDefault();

    let valid = true;
    let newErrors = { email: "", password: "", confirmPassword: "" };

    setErrorMessage("");
    setSuccessMessage("");

    if (!validateEmail(formData.email)) {
      newErrors.email = "Formato de correo inválido";
      setErrorMessage("El correo electrónico no tiene un formato válido");
      setSnackbarType("error");
      setOpenSnackbar(true);
      setIsLoadin(false);
      valid = false;
    }

    if (!validatePassword(formData.password)) {
      newErrors.password =
        "La contraseña debe tener al menos 8 caracteres, un carácter especial, un número, una mayúscula y una minúscula";
      setErrorMessage("La contraseña no cumple con los requisitos");
      setSnackbarType("error");
      setOpenSnackbar(true);
      setIsLoadin(false);
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
      setErrorMessage("Las contraseñas no coinciden");
      setSnackbarType("error");
      setOpenSnackbar(true);
      setIsLoadin(false);
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    const user = {
      usr_email: formData.email,
      usr_password: formData.password,
    };

    try {
      const response = await createUser(user);
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({
        email: "",
        password: "",
        confirmPassword: "",
      });

      setSuccessMessage("Usuario creado satisfactoriamente");
      setSnackbarType("success");
      setOpenSnackbar(true);
      setIsLoadin(false);
    } catch (error) {
      if (error.response.data.user) {
        setErrorMessage(
          "Ya hay una cuenta registrada con este correo electrónico."
        );
        setSnackbarType("error");
        setOpenSnackbar(true);
        setIsLoadin(false);
      } else {
        setErrorMessage("Error al crear el usuario verifique los datos.");
        setSnackbarType("error");
        setOpenSnackbar(true);
        setIsLoadin(false);
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }}>
        <Typography className="description-title">Signup</Typography>
        <Typography className="main-title">
          El Signup en React permite a los usuarios crear una cuenta
          proporcionando sus datos personales y credenciales. Se implementa con
          formularios validados, conexión a un backend con JWT o Firebase
          Authentication, y confirmación de email para mejorar la seguridad. Se
          recomienda hashing de contraseñas en el backend, restricciones en
          nombres de usuario y autenticación social para facilitar el registro.
          Una buena UX incluye mensajes de error claros y retroalimentación
          visual en los campos del formulario.
        </Typography>

        <Typography className="main-title" sx={{ fontWeight: "bold" }}>
          Para el uso debido de esta funcionalidad es necesario contar con un
          backend.
        </Typography>

        <div className="signup-login-container">
          <Box
            className="box-signup"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 3,
              height:
                errors.email || errors.password || errors.confirmPassword
                  ? 550
                  : 500,
            }}
          >
            <Box className={"box-container"}>
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "100%",
                    maxWidth: 480,
                    height: 400,
                  }}
                >
                  <Typography className="text-2">Correo electrónico</Typography>
                  <TextField
                    name="email"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px", // Cambia este valor para ajustar el redondeo
                      },
                    }}
                    className="text-field"
                    variant="outlined"
                    fullWidth
                    required
                    error={!!errors.email}
                    helperText={errors.email}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Typography className="text-2">Contraseña</Typography>
                  <TextField
                    name="password"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px", // Cambia este valor para ajustar el redondeo
                      },
                    }}
                    className="text-field"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    fullWidth
                    required
                    error={!!errors.password}
                    helperText={errors.password}
                    value={formData.password}
                    onChange={handleChange}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOffOutlined />
                              ) : (
                                <VisibilityOutlined />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                  <Typography className="text-2">
                    Repite tu contraseña
                  </Typography>
                  <TextField
                    name="confirmPassword"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px", // Cambia este valor para ajustar el redondeo
                      },
                    }}
                    className="text-field"
                    type={showConfirmPassword ? "text" : "password"}
                    variant="outlined"
                    fullWidth
                    required
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              edge="end"
                            >
                              {showConfirmPassword ? (
                                <VisibilityOffOutlined />
                              ) : (
                                <VisibilityOutlined />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                    }}
                  />
                  <LoadingButton
                    loading={isLoadind}
                    className="button-custom"
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                      textTransform: "none",
                    }}
                    loadingIndicator={
                      <CircularProgress size={24} sx={{ color: "white" }} />
                    }
                  >
                    Crear cuenta
                  </LoadingButton>
                </Box>
              </>
            </Box>
          </Box>
        </div>

        {/* Alerta flotante */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarType}
            sx={{ width: "100%" }}
          >
            {snackbarType === "success" ? successMessage : errorMessage}
          </Alert>
        </Snackbar>

        <Typography className="main-title" sx={{ fontWeight: "bold" }}>
          Para su implementación es recomendable consultar el repositorio, ya
          que se ven implicado el componente, la configuración del llamado a la
          api. En este caso esta modificado services/api, services/userService,
          singup.jsx
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
      </Container>
    </>
  );
};

export default Signup;
