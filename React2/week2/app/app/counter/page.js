import React from 'react';
import { CounterProvider } from './CounterContext';
import CounterPage from './CounterPage';

function App() {
    return (
        <CounterProvider>
            <CounterPage />
        </CounterProvider>
    );
}

export default App;
