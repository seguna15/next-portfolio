import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionNameType } from "./type";


export function useSectionInView(sectionName:SectionNameType, threshold = 0.75 ){
    const { ref, inView } = useInView({
      threshold,
    });

    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
      }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
} 

/* export function useHandleActive (sectionName: SectionNameType) {
   const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
   
    setActiveSection(sectionName);
    setTimeOfLastClick(Date.now());
}; */
