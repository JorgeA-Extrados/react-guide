import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { CohereClientV2 } from "cohere-ai";
import { CodeBlock } from "../custom/codeBlock";

const CohereAI = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cohere = new CohereClientV2({
    token: import.meta.env.VITE_API_KEY_COHERE,
  });

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  //TextGenerator
  const [inputTextGenerator, setInputTextGenerator] = useState("");
  const [generatedTextGenerator, setGeneratedTextGenerator] = useState("");
  const [loadingGenerator, setLoadingGenerator] = useState(false);

  const handleGenerateText = async () => {
    setLoadingGenerator(true);
    try {
      const response = await cohere.generate({
        model: "command",
        prompt: `Responde en español: ${inputTextGenerator}`,
      });

      let cleanText = response.generations[0].text.trim();
      cleanText = cleanText.replace(/^Me respondo en español:\s*/i, "");
      setGeneratedTextGenerator(cleanText);
    } catch (error) {
      console.error("Error generando texto:", error);
    } finally {
      setLoadingGenerator(false);
    }
  };

  //SearchSimilarity
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loadingSearchSimilarity, setLoadingSearchSimilarity] = useState(false);

  const documents = [
    "Smartphone Galaxy S21 con cámara de 108 MP",
    "Laptop Dell XPS 13 con 16GB de RAM",
    "Auriculares Bose QuietComfort 35 II con cancelación de ruido",
    "Smartphone iPhone 12 con cámara de 12 MP",
    "Auriculares Sony WH-1000XM4 para hacer deporte",
    "Laptop Apple MacBook Pro con M1 chip",
  ];

  const handleSearch = async () => {
    setLoadingSearchSimilarity(true);
    try {
      const response = await cohere.rerank({
        model: "rerank-english-v2.0",
        query,
        documents,
        top_n: 3,
      });

      setResults(response.results);
    } catch (error) {
      console.error("Error en búsqueda semántica:", error);
    } finally {
      setLoadingSearchSimilarity(false);
    }
  };

  //Chatbot
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loadingChatbot, setLoadingChatbot] = useState(false);

  const handleSendMessage = async () => {
    setLoadingChatbot(true);
    if (!inputMessage.trim()) return;

    const userMessage = { text: inputMessage, sender: "Usuario" };
    setMessages([...messages, userMessage]);

    try {
      const response = await cohere.generate({
        model: "command",
        prompt: `Eres un chatbot amigable y siempre respondes en español. Responde de manera clara y en español a la siguiente pregunta:\n${inputMessage}`,
        max_tokens: 100,
      });

      const botMessage = {
        text: response.generations[0].text,
        sender: "Chatbot",
      };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error generando respuesta:", error);
    }

    setInputMessage("");
    setLoadingChatbot(false);
  };

  //Summarizer
  const [inputTextSummarizer, setInputTextSummarizer] = useState("");
  const [summary, setSummary] = useState("");
  const [loadingSummarizer, setLoadingSummarizer] = useState(false);

  const handleSummarize = async () => {
    setLoadingSummarizer(true);
    try {
      const response = await cohere.summarize({
        text: `Por favor, resume este texto en español: \n\n${inputTextSummarizer}`,
        length: "short", // Opciones: "short", "medium", "long"
      });

      setSummary(response.summary);
    } catch (error) {
      console.error("Error resumiendo texto:", error);
    } finally {
      setLoadingSummarizer(false);
    }
  };

  //Translator
  const [inputTextTranslator, setInputTextTranslator] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loadingTranslator, setLoadingTranslator] = useState(false);

  const handleTranslate = async () => {
    setLoadingTranslator(true);
    try {
      const response = await cohere.generate({
        model: "command",
        prompt: `Traduce el siguiente texto del inglés al español:\n${inputTextTranslator}`,
      });

      setTranslatedText(response.generations[0].text);
    } catch (error) {
      console.error("Error traduciendo texto:", error);
    } finally {
      setLoadingTranslator(false);
    }
  };

  //CodeGenerator
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [loadingCode, setLoadingCode] = useState(false);

  const handleGenerateCode = async () => {
    setLoadingCode(true);
    try {
      const response = await cohere.generate({
        model: "command",
        prompt: `Escribe un fragmento de código en React que ${prompt}. Asegúrate de que los comentarios y la explicación sean en español.`,
        // max_tokens: 200,
      });

      setCode(response.generations[0].text);
    } catch (error) {
      console.error("Error generando código:", error);
    } finally {
      setLoadingCode(false);
    }
  };

  return (
    <>
      <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }}>
        <Typography className="description-title">Cohere AI</Typography>
        <Typography className="main-title">
          Cohere AI es una plataforma de inteligencia artificial especializada
          en procesamiento de lenguaje natural (NLP). Permite a los
          desarrolladores e ingenieros integrar modelos avanzados de IA en sus
          aplicaciones para generar texto, completar formularios, responder
          preguntas, analizar documentos y mejorar la experiencia del usuario.
          Sus modelos pueden ser utilizados en una amplia variedad de casos de
          uso, como asistentes virtuales, chatbots, generación de contenido,
          traducción automática, corrección gramatical y análisis de
          sentimientos. Cohere AI destaca por su fácil integración mediante API,
          escalabilidad y capacidad para personalizar respuestas según el
          contexto de la aplicación. Ideal para empresas y desarrolladores que
          buscan potenciar sus productos con inteligencia artificial, Cohere AI
          ofrece una solución eficiente para la automatización y optimización de
          tareas relacionadas con el lenguaje.
          <br />
          <a
            href="https://dashboard.cohere.com/api-keys"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver documentación oficial
          </a>
        </Typography>
        <Typography className="main-title" sx={{ fontWeight: "bold" }}>
          De todas las IA probadas en el bloque anterior Cohere AI resultó ser
          la que mejor respuesta brinda. A continuación se muestran sus
          diferentes implementaciones.
        </Typography>

        <Divider
          sx={{ margin: "16px 0", borderBottomWidth: 4, background: "#000" }}
        />

        <Typography
          className="main-title"
          sx={{ color: "rgb(3, 74, 150) !important", fontWeight: "bold" }}
        >
          Generación de Texto con Cohere AI
        </Typography>

        <Typography className="main-title">
          Puedes usar la API de Cohere para generar respuestas automáticas en tu
          aplicación React.
        </Typography>

        <Box>
          <TextField
            value={inputTextGenerator}
            onChange={(e) => setInputTextGenerator(e.target.value)}
            placeholder="Escribe algo aquí..."
            rows={5}
            multiline
            fullWidth
          />
          <Button
            className="button-user-data"
            sx={{ mt: 2 }}
            onClick={handleGenerateText}
            disabled={loadingGenerator}
          >
            {loadingGenerator ? <CircularProgress size={24} /> : "Generar"}{" "}
          </Button>

          <Typography className="promotor-text-card" sx={{ mt: 2 }}>
            <strong>Resultado:</strong>{" "}
            {loadingGenerator
              ? "Generando respuesta..."
              : generatedTextGenerator}{" "}
          </Typography>
        </Box>

        <Divider
          sx={{ margin: "16px 0", borderBottomWidth: 4, background: "#000" }}
        />

        <Typography
          className="main-title"
          sx={{ color: "rgb(3, 74, 150) !important", fontWeight: "bold" }}
        >
          Búsqueda Semántica
        </Typography>

        <Typography className="main-title">
          Cohere permite encontrar documentos similares a un texto dado. <br />
          La búsqueda semántica mejora la precisión de la búsqueda al entender
          el significado detrás de las palabras. En este caso, la consulta
          "smartphone con buena cámara" no solo encuentra productos que
          mencionan la palabra "cámara", sino que también devuelve productos
          que, aunque no mencionen la palabra exacta, son relevantes debido a la
          calidad de la cámara o el tipo de producto que se busca. Esto hace que
          la búsqueda sea más inteligente y útil para el usuario.
        </Typography>

        <Box>
          <TextField
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ingresa tu búsqueda..."
            fullWidth
          />
          <br />
          <Button
            className="button-user-data"
            sx={{ mt: 2, mb: 2 }}
            onClick={handleSearch}
            disabled={loadingSearchSimilarity}
          >
            {loadingSearchSimilarity ? (
              <CircularProgress size={24} />
            ) : (
              "Buscar"
            )}{" "}
          </Button>

          <ul>
            {results.map((result, index) => (
              <li key={index}>{documents[result.index]}</li>
            ))}
          </ul>
        </Box>

        <Divider
          sx={{ margin: "16px 0", borderBottomWidth: 4, background: "#000" }}
        />

        <Typography
          className="main-title"
          sx={{ color: "rgb(3, 74, 150) !important", fontWeight: "bold" }}
        >
          Chatbot con Cohere AI
        </Typography>

        <Typography className="main-title">
          Puedes crear un chatbot con la API de generación de Cohere.
        </Typography>

        <Box>
          <div
            style={{
              height: "200px",
              overflowY: "scroll",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <p key={index}>
                <strong>{msg.sender}:</strong> {msg.text}
              </p>
            ))}
          </div>
          <TextField
            sx={{ mt: 2 }}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            fullWidth
          />
          <Button
            className="button-user-data"
            sx={{ mt: 2 }}
            onClick={handleSendMessage}
          >
            {loadingChatbot ? <CircularProgress size={24} /> : "Enviar"}{" "}
          </Button>
        </Box>

        <Divider
          sx={{ margin: "16px 0", borderBottomWidth: 4, background: "#000" }}
        />

        <Typography
          className="main-title"
          sx={{ color: "rgb(3, 74, 150) !important", fontWeight: "bold" }}
        >
          Resumen de Texto
        </Typography>

        <Typography className="main-title">
          Si tienes grandes volúmenes de texto y quieres obtener resúmenes
          rápidos, puedes usar Cohere para generar versiones más cortas de
          artículos, documentos o noticias. <br />
          Ver como puedo poner el texto en español
        </Typography>

        <Box>
          <TextField
            value={inputTextSummarizer}
            onChange={(e) => setInputTextSummarizer(e.target.value)}
            placeholder="Pega un texto largo aquí..."
            rows={5}
            multiline
            fullWidth
          />
          <Button
            className="button-user-data"
            sx={{ mt: 2, mb: 2 }}
            onClick={handleSummarize}
          >
            {loadingSummarizer ? <CircularProgress size={24} /> : "Resumir"}{" "}
          </Button>
          <Typography>
            <strong>Resumen:</strong> {summary}
          </Typography>
        </Box>

        <Divider
          sx={{ margin: "16px 0", borderBottomWidth: 4, background: "#000" }}
        />

        <Typography
          className="main-title"
          sx={{ color: "rgb(3, 74, 150) !important", fontWeight: "bold" }}
        >
          Traducción de Texto
        </Typography>

        <Typography className="main-title">
          Aunque Cohere no está diseñado específicamente para traducción, puedes
          combinar su generación de texto para crear un traductor automático.
        </Typography>

        <Box>
          <TextField
            value={inputTextTranslator}
            onChange={(e) => setInputTextTranslator(e.target.value)}
            placeholder="Escribe un texto en ingles..."
            rows={5}
            multiline
            fullWidth
          />
          <Button
            className="button-user-data"
            sx={{ mt: 2, mb: 2 }}
            onClick={handleTranslate}
          >
            {loadingTranslator ? <CircularProgress size={24} /> : "Traductor"}{" "}
          </Button>
          <Typography>
            <strong>Traducción:</strong> {translatedText}
          </Typography>
        </Box>

        <Divider
          sx={{ margin: "16px 0", borderBottomWidth: 4, background: "#000" }}
        />

        <Typography
          className="main-title"
          sx={{ color: "rgb(3, 74, 150) !important", fontWeight: "bold" }}
        >
          Generación de Código (Code Generation)
        </Typography>

        <Typography className="main-title">
          Puedes usar Cohere para generar fragmentos de código en distintos
          lenguajes según un prompt.
        </Typography>

        <Box>
          <TextField
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ejemplo: ordene un array de números"
            rows={5}
            multiline
            fullWidth
          />
          <Button
            className="button-user-data"
            sx={{ mt: 2 }}
            onClick={handleGenerateCode}
          >
            {loadingCode ? <CircularProgress size={24} /> : "Generar Código"}{" "}
          </Button>
          {code.length > 0 && <CodeBlock code={code} />}
        </Box>

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

export default CohereAI;
