import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Alert,
  Box,
  Container,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { login } from "../../services/userService";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  //login
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
  const [startLogin, setStartLogin] = useState(false);
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSubmitLogin = async () => {
    setIsLoadin(true);
    // debugger;
    localStorage.clear();
    let valid = true;
    let newErrors = { email: "", password: "" };

    setErrorMessage(""); // Limpiar mensajes anteriores
    setSuccessMessage(""); // Limpiar mensajes anteriores

    if (!validateEmail(formData.email)) {
      newErrors.email = "Formato de correo inválido";
      setErrorMessage("El correo electrónico no tiene un formato válido");
      setSnackbarType("error");
      setOpenSnackbar(true);
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
      localStorage.clear();
      const response = await login(user);
      // debugger;

      const userLogin = {
        usr_email: formData.email,
        usr_id: response.data.usr_id,
        access_token: response.data.access_token,
        refreshToken: response.data.refreshToken,
      };

      localStorage.setItem("user-login", JSON.stringify(userLogin));
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      console.log(
        "===============Usuario logueado satisfactoriamente====================="
      );
      console.log(userLogin);
      console.log("====================================");

      setSuccessMessage("Usuario logueado satisfactoriamente");
      setSnackbarType("success");
      setOpenSnackbar(true);
      setIsLoadin(false);

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
    } catch (error) {
      if (error.response.data.statusCode === 406) {
        setErrorMessage(
          "Correo o contraseña incorrectos. Por favor, verifica tus credenciales e intenta nuevamente."
        );
        setSnackbarType("error");
        setOpenSnackbar(true);
        setIsLoadin(false);
      } else {
        setErrorMessage(
          "Error al iniciar sesión. Por favor, verifica tus credenciales e intenta nuevamente."
        );
        setSnackbarType("error");
        setOpenSnackbar(true);
        setIsLoadin(false);
      }
    }
  };

  return (
    <>
      <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }}>
        <Typography className="description-title">Login</Typography>
        <Typography className="main-title">
          El Login en React permite a los usuarios iniciar sesión con
          email/contraseña o proveedores externos como Google y Facebook. Se
          puede manejar con Firebase Authentication, JWT o sesiones en el
          backend. Implementa validaciones en el formulario con React Hook Form
          o Formik, maneja errores de autenticación y usa localStorage o cookies
          para persistir la sesión. Además, se pueden agregar medidas de
          seguridad como hashing de contraseñas y autenticación multifactor
          (2FA) para mayor protección.
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
                <Typography className="text-3">Correo electrónico</Typography>
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
                <Typography className="text-4">Contraseña</Typography>
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
                <LoadingButton
                  loading={isLoadind}
                  className="button-custom"
                  variant="contained"
                  onClick={handleSubmitLogin}
                  sx={{
                    textTransform: "none",
                  }}
                  // loadingIndicator={
                  //   <CircularProgress size={24} sx={{ color: "white" }} />
                  // }
                >
                  Iniciar sesión
                </LoadingButton>

                <h1 className="olvide-contrasenia">
                  <a href="/recover-password" className="iniciar-sesion">
                    Olvidé mi contraseña
                  </a>
                </h1>
              </Box>
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
          login.jsx
          <br />
          Para verificar que se realizo con éxito pueden ver en localstorage que
          se guarden los datos de la respuesta del login o ver por consola esos
          datos.
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

export default Login;
