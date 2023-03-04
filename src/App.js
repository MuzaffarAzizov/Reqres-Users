import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Users } from "./pages/Users";
import { SingleUser } from "./pages/SingleUser";
import { CreateUser } from "./pages/CreateUser";
import { Layout } from "./components/layout";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<SingleUser />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/users/:id" element={<SingleUser />} />
        </Routes>
      </Layout>
    </div>
  );
}
