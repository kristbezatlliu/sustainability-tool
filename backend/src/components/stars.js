import React from "react";
import { Stars } from "@react-three/drei"

export function StarsBG(props){
    return <>
        <Stars //Ktu mund te konfiguroni stars
            radius={400} 
            depth={60} 
            count={10000} 
            fade={true}
        />
    </>
}
