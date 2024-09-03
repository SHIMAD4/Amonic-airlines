import { createRoot } from 'react-dom/client';
import App from '../pages';
import '@/shared/styles/index.scss';

createRoot(document.getElementById('root')!).render(<App />);
