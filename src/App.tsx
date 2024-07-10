import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/independent/Navbar";
import "./index.css";
import Landing from "./pages/Landing";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
