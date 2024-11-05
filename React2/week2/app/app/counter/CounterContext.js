"use client"

import React, {useReducer, useContext, createContext} from 'react';

const initialState = {count: 0};

function CounterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

const CounterContext = createContext();

export function CounterProvider({children}) {
    const [state, dispatch] = useReducer(CounterReducer, initialState);
    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {children}
        </CounterContext.Provider>
    );
}

export function useCounter() {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error("useCounter must be used within a CounterProvider");
    }
    return context;
}