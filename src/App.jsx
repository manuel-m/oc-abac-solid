import { Routes, Router, Route } from "@solidjs/router";

import { Header } from "./comps/Header";

import { Home } from "./pages/Home";
import { Project } from "./pages/Project";

export default function App() {
  return (
    <div class="container">
      <Header />
      <Router>
        <div class="page">
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/proj/:id" component={Project} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
