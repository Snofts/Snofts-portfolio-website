import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
    <ToastContainer />

      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* APP */}
    </>
  )
}

export default App
