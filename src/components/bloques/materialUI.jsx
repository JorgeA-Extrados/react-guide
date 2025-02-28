import { Container, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { CodeBlock } from "../custom/codeBlock";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MaterialUI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  const exampleCode = `  
        // Componente personalizado
        import { Button } from '@mui/material';
        import React from 'react';

        export default function BtnCustom({
            endIcon,
            startIcon,
            label = 'Continuar',
            variant = 'filled',
            onClick = () => {
                return;
            },
        }) {
            return (
                <Button
                variant={variant}
                sx={{
                    textTransform: 'none',
                    bgcolor: variant === 'filled' ? '#e3602d' : null,
                    color: variant === 'filled' ? '#ffffff' : '#e3602d',
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontWeight: '600',
                    borderRadius: '12px',
                }}
                startIcon={startIcon}
                endIcon={endIcon}
                onClick={onClick}
                >
                {label}
                </Button>
            );
        }
    `;

  return (
    <>
      <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }}>
        <Typography className="description-title">Material UI</Typography>
        <Typography className="main-title">
          Material UI es una biblioteca de componentes React de código abierto
          que implementa Material Design de Google. Es completa y se puede usar
          en producción de manera inmediata. <br />
          <a
            href="https://mui.com/material-ui/getting-started/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver documentación oficial
          </a>
        </Typography>
        <Typography className="main-title" sx={{ fontWeight: "bold" }}>
          A continuación se muestra su implementación en un proyecto real. Para
          mayor profundización ver el código fuente.
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
      </Container>
    </>
  );
};

export default MaterialUI;
