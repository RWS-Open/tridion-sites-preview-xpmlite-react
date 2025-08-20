import { HeadlessXpmProvider } from "headless-xpm-react"
import { RouterProvider, createBrowserRouter } from 'react-router';

import Articles from './pages/Articles';
import Layout from "./Layout";
import Home from "./pages/Home";
import FurtherInformation from "./pages/FurtherInformation";
import About from "./pages/About";
import NotFound from "./components/NotFound";
import Contact from "./pages/Contact";
import "./App.css";

const routes = createBrowserRouter([
  {
    path: "/", Component: Layout,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: "articles", Component: Articles,
      },
      {
        path: "further-information", Component: FurtherInformation
      },
      {
        path: "about", Component: About,
      },
      {
        path:"contact", Component:Contact
      },
      {
        path: "*", Component: NotFound
      }
    ]
  }
]);
const App = () => {
  return (
    <HeadlessXpmProvider
      editorUrl={import.meta.env.VITE_EXP_SPACE_EDITOR_URL}
      staging={true}
      showExpSpaceEditor={true}
      showPageEditorLink={true}
    >
      <RouterProvider router={routes} />
    </HeadlessXpmProvider>
  )
}

export default App