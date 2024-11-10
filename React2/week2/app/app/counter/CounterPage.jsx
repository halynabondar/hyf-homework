"use client"

import React from 'react';
import {useCounter} from './CounterContext';

export default function CounterPage() {
    const {state, dispatch} = useCounter();

    return (
        <>
            <h1 className={'text-4xl m-5 text-center'}>Counter Page</h1>
            <p className={'text-2xl m-3'}>Count: {state.count}</p>
            <button className={'bg-blue-700 pl-3 pr-3 pb-1 pt-1 m-2 text-white font-bold text-2xl rounded'}
                    onClick={() => dispatch({type: "increment"})}>+
            </button>
            <button className={'bg-blue-700 pl-4 pr-4 pb-1 pt-1 m-2 text-white font-bold text-2xl rounded'}
                    onClick={() => dispatch({type: "decrement"})}>-
            </button>
        </>
    )
}