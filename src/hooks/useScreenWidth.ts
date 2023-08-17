import { useState, useEffect } from "react";




export default function useWindowWidth(){

    function getWindowWidth(){
        const {innerWidth: width} = window;
    
        return width
    }


    const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth())

    useEffect(()=>{
        function handleResize(){
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    },[])

    return windowWidth
}