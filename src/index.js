/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

ReactDOM.render(<App />, document.getElementById('app'));
*/

import App from './routes/App';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);