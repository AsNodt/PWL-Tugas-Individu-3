import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Beranda from "./Page/Beranda";
import Kontak from "./Page/Kontak";
import Tentang from "./Page/Tentang";
import Layout from "./Page/Layout";
import "./App.css";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="about" element={<Tentang />} />
          <Route path="contact" element={<Kontak />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
