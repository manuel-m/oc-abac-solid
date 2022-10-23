import styles from "./App.module.css";

import { Routes, Router, Route } from "@solidjs/router";

import { Header } from "./comps/Header";
import { Footer } from "./comps/Footer";

import { Home } from "./pages/Home";
import { Project } from "./pages/Project";

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/proj/:id" component={Project} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
