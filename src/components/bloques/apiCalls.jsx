import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container, IconButton, Typography } from "@mui/material";
import { CodeBlock } from "../custom/codeBlock";

const ApiCalls = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  const exampleCode = `
    import axios from "axios";
        // Crear una instancia de Axios
        const api = axios.create({
        baseURL: process.env.REACT_APP_API_URL, // URL de la API definida en .env
        timeout: 5000, // Tiempo máximo de espera
        headers: {
            "Content-Type": "application/json", // Configurar headers globales
        },
    });
    `;

  const exampleCode2 = `
        // LLamada a diferentes endpoinst
            import api from "./api";


            export const testGet = async () => {
            const response = await api.get("user/specialization/list");
            return response;
            }

            export const testPatch = async (id) => {
            const response = await api.patch("/user/delete/userSpecialization/$ {id}");
            return response;
            };

            export const testPost = async (user) => {
            const response = await api.post("/user/create", user);
            return response;
            };
    });
    `;

  const exampleCode3 = `
        // Utilizacion de las llamadas
        const [data, setData] = useState([]);
            const handleListPyme = async () => {
                try {
                    const listpymes = await testGet();
                    setData(listpymes.data.data);
                } catch (error) {
                    console.error("Error:", error);
                }
            };
    });
    `;

  return (
    <>
      <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }}>
        <Typography className="description-title">
          Consumo de Apis - Axios
        </Typography>
        <Typography className="main-title">
          Axios es un Cliente HTTP basado en promesas para node.js y el
          navegador. Es isomorfico (= puede ejecutarse en el navegador y nodejs
          con el mismo código base). En el lado del servidor usa el modulo
          nativo http de node.js, mientras que en el lado del cliente
          (navegador) usa XMLHttpRequests. <br />
          <a
            href="https://axios-http.com/es/docs/intro"
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
        <br />
        <CodeBlock code={exampleCode2} />
        <br />
        <CodeBlock code={exampleCode3} />
      </Container>
    </>
  );
};

export default ApiCalls;
