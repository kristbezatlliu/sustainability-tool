import Navbar from '../components/Navbar';
import HeaderBackground from '../components/HeaderBackground';
import Footer from '../components/footer';

const Contact = () => {
    return (
        <div className="Contact">
            <Navbar />
            <HeaderBackground title={"Contact"}/>
            <h2> Contact </h2>
            <Footer />
        </div>
    );
}
 
export default Contact;