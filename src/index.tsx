import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <div>
        <div style={{
            width: 300,
            margin: '1rem',
            marginLeft: 'auto',
            padding: '1rem',
            border: '1px solid #eee',
            borderRadius: 5,
            background: '#fff',
        }}>
            <App />
        </div>
    </div>);