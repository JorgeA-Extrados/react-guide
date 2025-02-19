import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ErrorNotFound = () => {
  const navigate = useNavigate();

  const handleVolver = async () => {
    navigate("/");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
      sx={{
        background: "#fff",
      }}
      px={2}
    >
      <Box>
        <Typography variant="h4" gutterBottom className="text-error">
          404
        </Typography>
        <Typography
          variant="body1"
          sx={{
            margin: "10px 0",
            color: "#747684",
            fontStyle: "Inter",
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
          Lo sentimos, la página que buscas no existe.
        </Typography>
        <Box className="modal-box-buttons">
          <Button className="modal-button button1" onClick={handleVolver}>
            Volver
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorNotFound;
