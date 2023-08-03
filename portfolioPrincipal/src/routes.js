import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import InicialPage from "./Pages/InicialPage";
import HomePage from "./Pages/HomePage";
import StandardPage from "./components/StandardPage";
import PageNotFound from "./Pages/PageNotFound";

function AppRoute() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<InicialPage/>}/>

        <Route path="/home" element={<StandardPage/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/home/projects" element={<Projects/>}/>
          <Route path="/home/aboutme" element={<AboutMe/>}/>
        </Route>
        
        <Route path="*" element={<PageNotFound/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoute;
