
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './assets/pages/Home';
import Addnew from './assets/pages/Addnew';
import Update from './assets/pages/Update';



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

            <Route index element={<Home />} />
            <Route path="addnew" element={<Addnew />} />
            <Route path="update/:id" element={<Update />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
