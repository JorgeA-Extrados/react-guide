import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";
import ErrorNotFound from "../views/error/error404";
import Home from "../views/home";
import Navbar from "../components/bloques/navbar";
import Cards from "../components/bloques/cards";
import Tables from "../components/bloques/table";
import Carrusel from "../components/bloques/carrusel";
import Rutas from "../components/bloques/rutas";
import Traduccion from "../components/bloques/traduccion";
import MaterialUI from "../components/bloques/materialUI";
import ApiCalls from "../components/bloques/apiCalls";
import ManejoToken from "../components/bloques/manejoToken";
import ProteccionRutas from "../components/bloques/proteccion-rutas";
import WhatsApp from "../components/bloques/whatsApp";
import Architecture from "../components/bloques/architecture";
import FirebaseImg from "../components/bloques/firebaseImg";
import Animacion from "../components/bloques/animacion";
import Signup from "../components/bloques/signup";
import Login from "../components/bloques/login";
import IA from "../components/bloques/ia";
import CohereAI from "../components/bloques/cohereAI";
import ReduxToolkit from "../components/bloques/reduxToolkit";
import Sidebar from "../components/bloques/sidebar";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/table" element={<Tables />} />
      <Route path="/carrusel" element={<Carrusel />} />
      <Route path="/rutas" element={<Rutas />} />
      <Route path="/traduccion" element={<Traduccion />} />
      <Route path="/material-ui" element={<MaterialUI />} />
      <Route path="/api-calls" element={<ApiCalls />} />
      <Route path="/manejo-token" element={<ManejoToken />} />
      <Route path="/protec-ruter" element={<ProteccionRutas />} />
      <Route path="/whatsApp" element={<WhatsApp />} />
      <Route path="/architecture" element={<Architecture />} />
      <Route path="/firebase-img" element={<FirebaseImg />} />
      <Route path="/aos" element={<Animacion />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ia" element={<IA />} />
      <Route path="/cohereAI" element={<CohereAI />} />
      <Route path="/redux-toolkit" element={<ReduxToolkit />} />
      <Route path="/sidebar" element={<Sidebar />} />

      {/* Ruta 404 */}
      <Route path="*" element={<ErrorNotFound />} />
    </Routes>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
