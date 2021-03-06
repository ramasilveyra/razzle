import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { MemoryRouter } from 'react-router';

describe('<App />', () => {
    test('renders without exploding', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
            div);
    });
});
