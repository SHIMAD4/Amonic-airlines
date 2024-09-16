import { createRoot } from 'react-dom/client';
import '@/shared/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from '@/pages/App.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
