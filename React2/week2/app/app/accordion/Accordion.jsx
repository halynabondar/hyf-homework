'use client';

import {useState, createContext, useContext} from "react";
import clsx from "clsx";

// Create the AccordionContext
const AccordionContext = createContext();

function Panel({title, children, index}) {

    // Use the context to get the active index and the handler to change it
    const {activeIndex, setActiveIndex} = useContext(AccordionContext);
    const isOpen = activeIndex === index;

    const toggle = () => {
        setActiveIndex(isOpen ? null : index); // Close if already open, otherwise open the panel
    };

    return (
        <div className={'p-2 border-t border-t-black flex flex-col justify-center items-center'}>
            <h2 className={'text-xl font-bold'}>{title}</h2>
            <div className={clsx({
                hidden: !isOpen,
            })}>{children}</div>
            {!isOpen && <button
                className={'border border-blue-500 rounded text-blue-500'}
                onClick={toggle}
            >Show more</button>}
        </div>
    );
}

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        // Provide the active index and setActiveIndex function to the context
        <AccordionContext.Provider value={{activeIndex, setActiveIndex}}>
            <div className={'flex flex-col border border-black rounded'}>
                <Panel title={'Section 1'} index={1}>
                    Content 1
                </Panel>
                <Panel title={'Section 2'} index={2}>
                    Content 2
                </Panel>
                <Panel title={'Section 3'} index={3}>
                    Content 3
                </Panel>
            </div>
        </AccordionContext.Provider>
    );
}