"use client"

import { ActiveSectionContextProviderProps, ActiveSectionContextType, SectionNameType } from '@/lib/type';
import React, { createContext, useContext, useState } from 'react'



export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children}: 
ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionNameType>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // to disable the observer temporarily when user clicks on a link.

    return <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
    }}>{children}</ActiveSectionContext.Provider>
    
}

export function useActiveSectionContext () {
    const context = useContext(ActiveSectionContext);

    if(context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}
