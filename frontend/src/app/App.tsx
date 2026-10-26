import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, Footer, PageWrapper } from "@/shared/ui";

import {
  ComponentsCatalog,
  MainPage,
  ConstructorPage,
  LoginPage,
  RegisterPage,
  AccountPage,
  CartPage,
  AboutPage,
} from "@/pages";

function App() {
  return (
    <Router>
      <Header />
      <PageWrapper>
        <main className="bg-(--bg-primary)">
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/catalog" element={<ComponentsCatalog />}></Route>
            <Route path="/constructor" element={<ConstructorPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/account" element={<AccountPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
        </main>
      </PageWrapper>
      <Footer />
    </Router>
  );
}

export default App;
