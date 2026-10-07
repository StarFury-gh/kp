import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "@/shared/ui";

import {
  ComponentsCatalog,
  MainPage,
  ConstructorPage,
  LoginPage,
  RegisterPage,
  AboutUsPage,
  AccountPage,
} from "@/pages";

function App() {
  return (
    <Router>
      <Header />
      <main className="bg-(--bg-primary)">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/catalog" element={<ComponentsCatalog />}></Route>
          <Route path="/constructor" element={<ConstructorPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/about" element={<AboutUsPage />}></Route>
          <Route path="/account" element={<AccountPage />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
