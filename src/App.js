import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Navbar from "./Component/Navbar";
import Connect from "./Pages/Connect";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      index: true,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/resume",
      element: <Resume />,
    },
    {
      path: "/skills",
      element: <Skills />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/connect",
      element: <Connect />,
    },
  ]);
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
