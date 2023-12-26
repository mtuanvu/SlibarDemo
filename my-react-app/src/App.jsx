import "../src/sytle/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboeard from "./pages/Dashboard";
import News from "./pages/News";
import Performance from "./pages/Performance";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Transactions from "./pages/Transactions";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Route path="/dashboeard" element={<Dashboeard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/news" element={<News />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
      </div>
    </Router>
  );
}

export default App;
