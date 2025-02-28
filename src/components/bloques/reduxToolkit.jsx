import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container, IconButton, Typography } from "@mui/material";
import { CodeBlock } from "../custom/codeBlock";

const ReduxToolkit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // Función para retroceder en la navegación
  };

  const exampleCode = `
          npm install @reduxjs/toolkit react-redux
        `;

  const exampleCode2 = `
            src/
            │── store/
            │   ├── store.js
            │   ├── slices/
            │   │   ├── userSlice.js
            │── App.jsx
            │── main.jsx
        `;

  const exampleCode3 = `
        import { configureStore } from '@reduxjs/toolkit';
        import userSlice from './slices/userSlice';


        const store = configureStore({
        reducer: {
            user: userSlice,
        },
        });

        export default store;
        `;

  const exampleCode4 = `
        import { createSlice } from '@reduxjs/toolkit';

        export const userSlice = createSlice({
        name: 'user',
        initialState: {
            email: '',
            id: '',
            type: '', // Puede ser 'admin', 'user', etc.
        },
        reducers: {
            setUser: (state, action) => {
            const { email, id, type } = action.payload;
            state.email = email;
            state.id = id;
            state.type = type;
            },
            clearUser: (state) => {
            state.email = '';
            state.id = '';
            state.type = '';
            },
        },
        });

        export const { setUser, clearUser } = userSlice.actions;

        export default userSlice.reducer;
        `;

  const exampleCode5 = `
        import { Provider } from "react-redux";
        import AppRoutes from "./routes/AppRoutes";
        import store from "./store/store";

        function App() {
        return (
            <Provider store={store}>
            <AppRoutes />
            </Provider>
        );
        }

        export default App;
        `;

  const exampleCode6 = `
        import { useSelector, useDispatch } from "react-redux";
        import { setUser, clearUser } from "../store/slices/userSlice";

        function UserProfile() {
        const dispatch = useDispatch();
        const user = useSelector((state) => state.user);

        const handleLogin = () => {
            dispatch(setUser({ email: "user@example.com", id: "12345", type: "admin" }));
        };

        const handleLogout = () => {
            dispatch(clearUser());
        };

        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Perfil de Usuario</h2>
            <p><strong>Email:</strong> {user.email || "No registrado"}</p>
            <p><strong>ID:</strong> {user.id || "N/A"}</p>
            <p><strong>Tipo:</strong> {user.type || "N/A"}</p>

            <button onClick={handleLogin} style={{ marginRight: "10px" }}>
                Iniciar Sesión
            </button>
            <button onClick={handleLogout}>
                Cerrar Sesión
            </button>
            </div>
        );
        }

        export default UserProfile;
        `;

  return (
    <>
      <Container sx={{ overflow: "hidden", paddingBottom: "2rem" }}>
        <Typography className="description-title">Redux Toolkit</Typography>
        <Typography className="main-title">
          Redux Toolkit es la solución recomendada para gestionar el estado
          global en aplicaciones React de manera eficiente. Simplifica la
          configuración de Redux al proporcionar herramientas como createSlice,
          createAsyncThunk y configureStore, reduciendo la necesidad de escribir
          código repetitivo. Además, incluye integraciones con Immer para una
          manipulación más sencilla del estado inmutable y Redux Thunk para
          manejar acciones asincrónicas. Con su enfoque optimizado, Redux
          Toolkit facilita la escalabilidad y mantenibilidad de las
          aplicaciones, eliminando muchas de las dificultades del Redux
          tradicional.
          <br />
          <a
            href="https://redux-toolkit.js.org/introduction/getting-started"
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
        <Typography className="main-title">
          Para su implementacion debemos seguir los siguientes pasos:
          <br />
          1- Instalamos la libreria
        </Typography>
        <CodeBlock code={exampleCode} />
        <Typography className="main-title">
          2- Creamos la estructura del store
        </Typography>
        <CodeBlock code={exampleCode2} />
        <Typography className="main-title">
          3- Configurar el Store Global
        </Typography>
        <CodeBlock code={exampleCode3} />
        <Typography className="main-title">
          4- Crear un Slice (Estado + Reducers)
          <br />
          store/slices/userSlice.js
        </Typography>
        <CodeBlock code={exampleCode4} />
        <Typography className="main-title">
          5- Agregar el Store al Provider
        </Typography>
        <CodeBlock code={exampleCode5} />
        <Typography className="main-title">
        6- Usar Redux Toolkit en los componentes
        </Typography>
        <CodeBlock code={exampleCode6} />

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

export default ReduxToolkit;
