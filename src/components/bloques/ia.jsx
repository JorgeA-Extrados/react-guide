import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import {
  anthropicAI,
  askOpenAI,
  cohereAI,
  huggingFace,
} from "../../services/isService";
import ReactMarkdown from "react-markdown";
import * as mobilenet from "@tensorflow-models/mobilenet";

import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";

const IA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  // 🔹 OpenAI (GPT-4)
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading2, setLoading2] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const aiResponse = await askOpenAI(input);
    setResponse(aiResponse);
    setLoading(false);
  };

  // 🔹 Hugging Face
  //   const [inputTextHugging, setInputTextHugging] = useState(""); // Para manejar el texto del usuario
  //   const [responseHugging, setResponseHugging] = useState("");

  //   const handleSend = async () => {
  //     if (inputTextHugging.trim() === "") {
  //       setResponseHugging("Por favor ingresa un texto.");
  //       return;
  //     }
  //     try {
  //       const { data } = await huggingFace({
  //         inputs: `Responde de manera coherente en español: ${inputTextHugging}`,
  //       });
  //       setResponseHugging(data[0]?.generated_text || "Sin respuesta coherente.");
  //     } catch (error) {
  //       console.error(error);
  //       setResponseHugging("Error al generar la respuesta. Intenta más tarde.");
  //     }
  //   };
  const [questionHugging, setQuestionHugging] = useState(""); // Estado para la pregunta
  const [responseHugging, setResponseHugging] = useState(null);
  const [loadingHugging, setLoadingHugging] = useState(false);
  const [errorHugging, setErrorHugging] = useState(null);

  // Función para hacer la consulta a la API usando Axios
  const query = async (data) => {
    setLoadingHugging(true);
    setErrorHugging(null);

    try {
      //   const result = await axios.post(
      //     "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
      //     data,
      //     {
      //       headers: {
      //         Authorization: "Bearer hf_***", // Reemplaza con tu token
      //         "Content-Type": "application/json",
      //       },
      //     }
      //     );
      const result = await huggingFace(data);
      setResponseHugging(result.data); // Guardar el resultado de la respuesta
    } catch (err) {
      setErrorHugging("Error fetching data"); // En caso de error
    } finally {
      setLoadingHugging(false); // Dejar de cargar
    }
  };

  // Ejecutar la consulta
  const handleQuery = () => {
    if (!questionHugging.trim()) {
      setErrorHugging("Please enter a question.");
      return;
    }

    // query({
    //   inputs: {
    //     question: questionHugging,
    //     context: "Soy Argentino hincha del club boca juniors.", // Cambia el contexto si es necesario
    //   },
    // });

    query({
      question: questionHugging,
    });
  };

  // 🔹 Cohere AI
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const callAPICohere = async () => {
    if (!userMessage.trim()) return; // Evita enviar mensajes vacíos

    const newUserMessage = { role: "user", text: userMessage };
    setChatHistory((prevChat) => [...prevChat, newUserMessage]); // Agrega solo aquí el mensaje del usuario
    setUserMessage("");
    setLoading(true);

    try {
      const { data } = await cohereAI({
        model: "command-xlarge-nightly",
        prompt: userMessage,
      });

      const botResponse = {
        role: "bot",
        text: data.text || "Sin respuesta",
      };

      setChatHistory((prevChat) => [...prevChat, botResponse]); // Solo agregamos la respuesta del bot
    } catch (error) {
      console.error("Error en la API:", error);
      setChatHistory((prevChat) => [
        ...prevChat,
        { role: "bot", text: "Error al obtener respuesta de la IA" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 TensorFlow
  //ImageClassifier
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState("Esperando imagen...");

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const classifyImage = async () => {
    if (!image) return;

    const imgElement = document.createElement("img");
    imgElement.src = URL.createObjectURL(image);

    const model = await mobilenet.load();
    const predictions = await model.classify(imgElement);
    setPrediction(predictions[0].className); // Mostrar la predicción más probable
  };

  //Chatbot
  const [inputChatbot, setInputChatbot] = useState("");
  const [responseChatbot, setResponseChatbot] = useState("");
  const [modelChatbot, setModelChatbot] = useState(null);

  // Cargar el modelo QnA
  React.useEffect(() => {
    const loadModel = async () => {
      await tf.setBackend("webgl"); // Asegura que se use WebGL si está disponible
      await tf.ready(); // Espera a que TensorFlow.js esté listo
      const model = await qna.load({
        modelUrl:
          "https://tfhub.dev/tensorflow/tfjs-model/mobilebert/1/default/1",
        fetchOptions: { mode: "no-cors" },
      });
      setModelChatbot(model);
    };
    loadModel();
  }, []);

  const handleQuestion = async () => {
    if (modelChatbot && inputChatbot) {
      const answers = await model.findAnswers(
        inputChatbot,
        "El frontend de una app es la interfaz gráfica que interactúa con el usuario."
      );
      setResponseChatbot(
        answers[0]?.text || "Lo siento, no entendí la pregunta."
      );
    }
  };

  return (
    <>
      <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }}>
        <Typography className="description-title">
          Implementación de IA en React
        </Typography>
        <Typography className="main-title">
          La inteligencia artificial (IA) en React se puede implementar de
          diversas formas, integrando servicios externos como OpenAI,
          TensorFlow.js o modelos personalizados en la nube. Estas
          implementaciones permiten agregar funcionalidades como chatbots
          inteligentes, análisis de datos en tiempo real, reconocimiento de voz
          e imágenes, y sistemas de recomendación. Para lograrlo, se utilizan
          APIs de IA, modelos preentrenados y procesamiento en el navegador o
          backend. React facilita la integración con bibliotecas como
          tensorflow/tfjs y servicios como OpenAI, permitiendo una experiencia
          de usuario más intuitiva y automatizada.
        </Typography>

        <Typography className="main-title" sx={{ fontWeight: "bold" }}>
          Para mayor profundización ver el código fuente.
        </Typography>

        <Divider
          sx={{ margin: "16px 0", borderBottomWidth: 4, background: "#000" }}
        />

        <Typography
          className="main-title"
          sx={{ color: "rgb(3, 74, 150) !important", fontWeight: "bold" }}
        >
          OpenAI (GPT-4)
        </Typography>
        <Typography
          className="main-title"
          sx={{ textAlign: "justify !important" }}
        >
          OpenAI ofrece un límite gratuito inicial para los nuevos usuarios, lo
          que permite realizar pruebas y experimentar con sus modelos de IA,
          como GPT-3.5 y GPT-4, sin necesidad de agregar un método de pago al
          principio. Sin embargo, este crédito gratuito tiene una cantidad
          limitada. Una vez que se agota, ya no puedes seguir utilizando la API
          de manera gratuita y necesitarás un método de pago para continuar con
          el servicio.
          <br />
          Es importante tener en cuenta que el simple uso de ChatGPT consume
          parte de este crédito gratuito. Esto significa que cada vez que
          interactúas con el modelo, ya sea realizando consultas o enviando
          mensajes, el crédito se va reduciendo. Esto puede dificultar realizar
          pruebas sin que el crédito gratuito se agote rápidamente, incluso si
          solo se realizan interacciones sencillas.
        </Typography>
        {/* <Box sx={{ maxWidth: 500, margin: "auto", textAlign: "center", mt: 5 }}>
          <Typography variant="h5" gutterBottom>
            Pregunta a OpenAI
          </Typography>
          <TextField
            fullWidth
            label="Escribe tu pregunta"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={handleSubmit} disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Enviar"}
          </Button>
          {response && (
            <Typography
              variant="body1"
              sx={{ mt: 3, p: 2, bgcolor: "#f4f4f4", borderRadius: 2 }}
            >
              {response}
            </Typography>
          )}
        </Box> */}

        <Divider
          sx={{ margin: "16px 0", borderBottomWidth: 4, background: "#000" }}
        />

        <Typography
          className="main-title"
          sx={{ color: "rgb(3, 74, 150) !important", fontWeight: "bold" }}
        >
          Hugging Face
        </Typography>
        <Typography className="main-title">
          Se implementaron diferentes api de la plataforma pero no logro obtener
          una respuesta satisfactoria
        </Typography>
        {/* <div>
          <Typography className="main-title" variant="h4" gutterBottom>
            Interactúa con Hugging Face
          </Typography>

          <TextField
            label="Escribe algo"
            variant="outlined"
            fullWidth
            value={inputTextHugging}
            onChange={(e) => setInputTextHugging(e.target.value)} // Actualiza el texto
            sx={{ marginBottom: 2 }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSend} // Llama a la API cuando se hace clic
            sx={{ marginBottom: 2 }}
          >
            Enviar
          </Button>

          <Card>
            <CardContent>
              <Typography variant="body1">
                {responseHugging ||
                  "Escribe algo y presiona 'Enviar' para interactuar."}
              </Typography>
            </CardContent>
          </Card>
        </div> */}
        {/* <Box sx={{ width: "100%", padding: 2 }}>
          <TextField
            label="Ask a Question"
            variant="outlined"
            fullWidth
            value={questionHugging}
            onChange={(e) => setQuestionHugging(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleQuery}
            sx={{ marginBottom: 2 }}
          >
            Ask Question
          </Button>

          {loadingHugging && <Typography>Loading...</Typography>}
          {errorHugging && (
            <Typography color="error">{errorHugging}</Typography>
          )}

          {response && (
            <div>
              <Typography variant="h6">Response:</Typography>
              <pre>{JSON.stringify(responseHugging, null, 2)}</pre>
            </div>
          )}
        </Box> */}

        <Divider
          sx={{ margin: "16px 0", borderBottomWidth: 4, background: "#000" }}
        />

        <Typography
          className="main-title"
          sx={{ color: "rgb(3, 74, 150) !important", fontWeight: "bold" }}
        >
          Google Vertex AI
        </Typography>
        <Typography className="main-title">
          Es obligatorio habilitar la facturación Vertex AI API necesita un
          proyecto con una cuenta de facturación.
        </Typography>

        <Divider
          sx={{ margin: "16px 0", borderBottomWidth: 4, background: "#000" }}
        />

        <Typography
          className="main-title"
          sx={{ color: "rgb(3, 74, 150) !important", fontWeight: "bold" }}
        >
          Cohere IA
        </Typography>
        <Box
          sx={{
            width: "80%",
            margin: "auto",
            padding: 2,
            border: "1px solid #ddd",
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Chat con Cohere AI
          </Typography>

          {/* Chat History */}
          <Box
            sx={{
              height: "300px",
              overflowY: "auto",
              padding: 1,
              border: "1px solid #ccc",
              borderRadius: 1,
            }}
          >
            {chatHistory.map((msg, index) => (
              <Typography
                key={index}
                sx={{
                  textAlign: msg.role === "user" ? "right" : "left",
                  backgroundColor: msg.role === "user" ? "#e0f7fa" : "#f1f1f1",
                  padding: "8px",
                  borderRadius: "10px",
                  margin: "5px 0",
                  display: "inline-block",
                  maxWidth: "80%",
                }}
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </Typography>
            ))}
            {loading && (
              <Typography sx={{ textAlign: "left", display: "inline-block" }}>
                <CircularProgress size={20} />
              </Typography>
            )}
          </Box>

          {/* Input y Botón */}
          <Box sx={{ display: "flex", marginTop: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Escribe tu mensaje"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && callAPICohere()}
            />
            <Button
              variant="contained"
              onClick={callAPICohere}
              sx={{ marginLeft: 1 }}
            >
              Enviar
            </Button>
          </Box>
        </Box>

        <Divider
          sx={{ margin: "16px 0", borderBottomWidth: 4, background: "#000" }}
        />

        <Typography
          className="main-title"
          sx={{ color: "rgb(3, 74, 150) !important", fontWeight: "bold" }}
        >
          TensorFlow
        </Typography>
        <Typography className="main-title">
          Se investigó TensorFlow pero su implementación es muy compleja y
          difícil de implementar con react está más orientado al backend. Se
          seguirá investigando para lograr su implementación.
        </Typography>

        {/* <div style={{ textAlign: "center" }}>
          <TextField
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={classifyImage}>
            Clasificar Imagen
          </Button>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Predicción: {prediction}
          </Typography>
        </div>

        <div style={{ textAlign: "center" }}>
          <TextField
            label="Haz tu pregunta"
            value={inputChatbot}
            onChange={(e) => setInputChatbot(e.target.value)}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={handleQuestion}>
            Preguntar
          </Button>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Respuesta: {responseChatbot}
          </Typography>
        </div> */}

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

export default IA;
