import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeComponent from "./pages/Home";
import ProductDetails from "./pages/Product";
import NavBar from "./pages/Home/NavBar";
import "./App.css";
import SideBar from "./pages/Home/SideBar";

function App() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar
          setOpen={setOpen}
          open={open}
          setSearch={setSearch}
          search={search}
        />
        <SideBar setOpen={setOpen} open={open} />
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <HomeComponent
                  setSearch={setSearch}
                  search={search}
                  setOpen={setOpen}
                  open={open}
                />
              }
            />
            <Route
              path="/product/:id"
              element={<ProductDetails setOpen={setOpen} open={open} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
