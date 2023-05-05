import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import HeaderBackground from '../components/HeaderBackground';

const NotFound = () => {
    return (
        <div className="404notfound">
            <Navbar />
            <HeaderBackground title="404" />
            <h1> 404 ERROR PAGE NOT FOUND 🥶</h1>
            <Footer />
        </div>
    );
}
 
export default NotFound;