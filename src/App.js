
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Component/Login";
import { Home } from "./Pages/home";
import { Cards } from "./Pages/Cards";
import { Users } from "./Pages/Users";
import { Stats } from "./Pages/Stats";
import { Settings } from "./Pages/Settings";
import { Dashboard } from "./Pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/users" element={<Users />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;