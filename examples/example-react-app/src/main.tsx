import { createRoot } from 'react-dom/client'
import { HeadlessXpmProvider } from 'headless-xpm-react';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <HeadlessXpmProvider
    editorUrl={import.meta.env.VITE_EXP_SPACE_EDITOR_URL}
    staging={import.meta.env.VITE_TRIDION_SITES_STAGING}
    showExpSpaceEditor={true}
    showPageEditorLink={true}
  >
    <App />
  </HeadlessXpmProvider>
)
