import "bootstrap/dist/css/bootstrap.min.css";
import BlogMain from "./pages/BlogMain";
import LoginForm from "./pages/LoginForm";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./pages/RegisterForm";
import EditConfig from "./pages/EditConfig";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BlogMain />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/editConfig" element={<EditConfig />} />
      </Routes>
    </>
  );
}
