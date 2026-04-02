import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HireModal from "@/components/HireModal";
import Home from "@/pages/Home";
import Experience from "@/pages/Experience";
import Certifications from "@/pages/Certifications";
import NotFound from "@/pages/not-found";

function AppContent() {
  const [hireOpen, setHireOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/" || location === "";

  return (
    <>
      <div className="grain-overlay" />
      <Navbar onHireMe={() => setHireOpen(true)} />
      <HireModal open={hireOpen} onClose={() => setHireOpen(false)} />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/experience" component={Experience} />
        <Route path="/certifications" component={Certifications} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <AppContent />
    </WouterRouter>
  );
}

export default App;
