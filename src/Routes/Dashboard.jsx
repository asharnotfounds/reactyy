import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { auth  } from "../services/firebase";

function Dashboard() {


    return (
        <>
            <Navbar />
            <div>
                HOME
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
