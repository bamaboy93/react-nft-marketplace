import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";

const HomeView = lazy(() => import("./views/Home"));
const MarketplaceView = lazy(() => import("./views/Marketplace"));
const RankingsView = lazy(() => import("./views/Rankings"));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/marketplace" element={<MarketplaceView />} />
          <Route path="/rankings" element={<RankingsView />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
