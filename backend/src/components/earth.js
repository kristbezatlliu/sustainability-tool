import React, { useRef } from 'react';
import { useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei"
import * as THREE from "three";

import EarthDayMap from "../textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../textures/8k_earth_clouds.jpg";

import { TextureLoader } from "three";

export function Earth(props){
    //Per efekt shpejtesie madhesia e tokes mund te ndryshohet ketu
    const [ earthSize ] = useState(1); 
    const [ earthPosition ] = useState([0,0,3]);

    const [colorMap, normalMap, specularMap, cloudsMap ] = useLoader(
        TextureLoader, 
        [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
    );

    const earthRef = useRef();
    const cloudsRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        earthRef.current.rotation.y = elapsedTime / 15;
        cloudsRef.current.rotation.y = elapsedTime / 15;
    });

    return <>
        <pointLight color="#f6f3ea" position={[2, 0, 6]} intensity={1.2} />

        <Stars //Ktu mund te konfiguroni stars
            radius={400} 
            depth={60} 
            count={20000} 
            fade={true}
        />
 
        <mesh ref={cloudsRef} position={earthPosition}> 
            <sphereGeometry args={[earthSize+0.01, 32, 32]}/>
            <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide}/>
        </mesh>

        <mesh ref={earthRef} position={earthPosition}>
            <sphereGeometry args={[earthSize, 32, 32]}/>
            <meshPhongMaterial specularMap={specularMap}  />
            <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7}/>
            
            {/*
            Kjo lejon globin te behet zoom dhe rotate sipas deshires se userit.
            <OrbitControls 
                enableZoom={true} 
                enablePan={true} 
                enableRotate={true} 
                zoomSpeed={0.6}
                panSpeed={0.4}
                rotateSpeed={0.5}  
            />
            */}
        </mesh>
    </>
}

/* 
Per pjesen e globit duhen kto dependencies (nqs jan dependencies 💀💯)
npm install three @react-three/fiber
npm install @react-three/drei
npm install styled-components

*/