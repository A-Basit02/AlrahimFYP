import { Route, Routes } from "react-router-dom";
import {
  Form1,
  Form2,
  Form3,
  Form4,
  Form5,
  Form6,
  Home,
  Login,
  Navbar,
  Signup,
} from "./components/index.js";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/form4" element={<Form4 />} />
        <Route path="/form5" element={<Form5 />} />
        <Route path="/form6" element={<Form6 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
