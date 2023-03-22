import { LinearProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";

const HomeView = lazy(() => import("./views/Home"));

function App() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
