import { Route, Routes } from "react-router-dom";
import Catalog from "./pages/Catalog";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdverts } from "./store/slices/adrevts-operations";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navigation from "./components/Navigation/Navigation";
import ModalDetailedAdvert from "./components/ModalDetailedAdvert/ModalDetailedAdvert";
import { isModalDetailsOpenSelector } from "./store/selectors";

function App() {
  const isModalDetailsOpen = useSelector(isModalDetailsOpenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
      {isModalDetailsOpen && <ModalDetailedAdvert />}
    </>
  );
}

export default App;
