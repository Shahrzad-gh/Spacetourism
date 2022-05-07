import star from "../assets/star.png"

function Navbar() {
    return (
        <div className="navbar">
            <div className="star"><img src={star} alt="star" /></div>
            <div className="line"></div>
            <div className="nav">
                <ul>
                    <li><p><b>00</b> HOME</p></li>
                    <li><p><b>01</b> DESTINATION</p></li>
                    <li><p><b>02</b> CREW</p></li>
                    <li><p><b>03</b> TECHNOLOGIY</p></li>
                </ul>
            </div>
            {/* <div><button></button> </div> */}
        </div>
    )
}

export default Navbar