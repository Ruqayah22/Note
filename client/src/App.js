import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addNote" element={<AddNote />} />
          <Route exact path="/notes/:id" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
