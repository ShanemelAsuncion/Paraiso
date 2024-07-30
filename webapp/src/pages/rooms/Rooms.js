import Navbar from "../../components/navbar/Navbar";
import logo from "../../assets/Logo_black.png"
import "./Rooms.css"

function Rooms() {
    return (
        <div className="rooms-container">
            <img src={logo} alt="Logo" className="logo" />
            <Navbar />
            <h1>Choose Your Room</h1>
        </div>
    );
}

export default Rooms;

