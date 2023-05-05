import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from '../components/earth';
import { StarsBG } from '../components/stars';

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import './home.css';

const CanvasContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
`;

const Home = () => {
    return <CanvasContainer className="earth_canvas">
        {/*Navigation Bar*/}
        <Navbar />

        {/*Front Page*/}
        <Canvas className="canvas">
            <Suspense fallback={null}>
                <Earth />
            </Suspense>
        </Canvas>

        <section className="TopSection">
            <h1> GLOBAL WARMING </h1>
            <h2> Help the world reduce global warming by using our sustainability tool! </h2>
            <button onClick={() => console.log("TEST ETSSTESET")}> Click Here </button>
        </section>

        {/*Section 2*/}
        <section className="SecondSection">
            <Canvas className="starsCanvas">
                <StarsBG />
            </Canvas>

            <div className="secondTopSection">
                <h1> Who we are </h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  </p>
                <img src="https://static.wikia.nocookie.net/225beef7-9893-4a6f-9f41-55f25791c039"/>
            </div>
        </section>

        {/*Section 3*/}
        <section className="ThirdSection">
            <div className="third_group">
                <h1> Our Service </h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  </p>
                <p> [Social icons] </p>
            </div>
            
            <img className="third_group" src="https://www.splashlearn.com/math-vocabulary/wp-content/uploads/2022/05/graphs-3-01.png"/>
        </section>
        
        {/*Section 4*/}
        <section className="FourthSection">
            <h1> Our Team </h1>

            <div className="team">
                <div className="img_group">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"/>
                    <h2> Krist </h2>
                </div>

                <div className="img_group">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"/>
                    <h2> Besi </h2>
                </div>

                <div className="img_group">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"/>
                    <h2> Irdi </h2>
                </div>

                <div className="img_group">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"/>
                    <h2> Paridi </h2>
                </div>
            </div>
        </section>

        {/*Section 5*/}
        <section className="FifthSection">
            <div className="fifth_group">
                <h1> 3,520,305 </h1>
                <h4> Metric tons of CO2 is emitted each year. </h4>
            </div>
        </section>
        <Footer />
    </CanvasContainer>
}
 
export default Home;