import { Route, Routes } from "react-router-dom";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />

      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  );
}

export default App;
