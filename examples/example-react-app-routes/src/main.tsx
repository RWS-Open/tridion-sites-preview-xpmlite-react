import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import { HeadlessXpmProvider } from 'headless-xpm-react';
import Layout from './components/Layout.tsx';
import ArticlePage from './Pages/ArticlePage.tsx';
import HomePage from './Pages/HomePage.tsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/article",
        element: <ArticlePage />
      }
    ]
  },
]);  
createRoot(document.getElementById('root')!).render(
  <HeadlessXpmProvider
    editorUrl={import.meta.env.VITE_EXP_SPACE_EDITOR_URL}
    staging={true}
    showExpSpaceEditor={true}
    showPageEditorLink={true}
  >
    <RouterProvider router={router} />
  </HeadlessXpmProvider>
)
