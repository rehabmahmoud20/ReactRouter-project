import "./App.css";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// pages
import { Home } from "./Pages/Home";
import About from "./Pages/About";
// layout
import RootLayout from "./rootLayouts/RootLayout";
import { Contact } from "./Pages/help/Contact";
import { Faq } from "./Pages/help/Faq";
import { HelpLayout } from "./rootLayouts/HelpLayout";
import { NotFound } from "./Pages/NotFound";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />

    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
