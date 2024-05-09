import { Navigate, Route, Routes } from "react-router-dom";
// import Catalog from "./pages/Catalog";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdverts } from "./store/slices/adrevts-operations";
// import Home from "./pages/Home";
// import Favorites from "./pages/Favorites";
import Navigation from "./components/Navigation/Navigation";
import ModalDetailedAdvert from "./components/ModalDetailedAdvert/ModalDetailedAdvert";
import { isModalDetailsOpenSelector } from "./store/selectors";
import Scrollbars from "rc-scrollbars";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites"));

function App() {
  const isModalDetailsOpen = useSelector(isModalDetailsOpenSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <Scrollbars
      style={{ height: "100vh" }}
      autoHide
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            borderRadius: "7px",
            width: "8px",
          }}
        />
      )}
    >
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      {isModalDetailsOpen && <ModalDetailedAdvert />}
    </Scrollbars>
  );
}

export default App;
