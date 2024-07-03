import { PiFacebookLogoDuotone } from "react-icons/pi";
import { PiTwitterLogoDuotone } from "react-icons/pi";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { FaGooglePlusG } from "react-icons/fa";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

 function Footer(){

    return(
        <>
        <section id="foot">
            <div >
                <div id="in">
                <div style={{marginRight:"300px",marginLeft:"-300px",fontSize:"22px"}}>Stay Connected With Our Email Updates</div>
                <div><input  style={{width:"500px",height:"40px",marginLeft:"-300px" ,borderRadius:"20px"}}type="email" placeholder="your email address"/></div>
                <button style={{marginTop:"20px",width:"100px",borderRadius:"30px",height:"50px",marginRight:"-100px"}}>subscribe</button>
                </div>
                <div id="whole">
                <div>
                    <ul>
                        <li style={{fontSize:"30px",marginBottom:"10px"}}>ARTCRAFT</li>
                        <p style={{fontSize:"15px",marginBottom:"10px"}}>There are many variations of passages of look <br /><br />
                        even slightly believable.</p>

                        <div id="ele">
                            <li><PiFacebookLogoDuotone  /></li>
                            <li><PiTwitterLogoDuotone /></li>
                            <li><PiYoutubeLogoDuotone /></li>
                            <li><FaGooglePlusG /></li>
                            <li><PiInstagramLogoDuotone /></li>
                        </div>
                    </ul>
                </div>

                <div>
                     <ul>
                            <li style={{fontSize:"25px"}}>Information</li>
                            <li>About Us</li>
                            <li>Delivery Information</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Site Map</li>
                        </ul>
                    </div>

                    <div>
                     <ul>
                            <li style={{fontSize:"25px"}}>Extras</li>
                            <li>Brands</li>
                            <li>Gift Certificates</li>
                            <li>Affillate</li>
                            <li>Specials</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div>
                     <ul>
                            <li style={{fontSize:"25px"}}>Store Information</li>
                            <li><IoLocationSharp />Artcraft-Art Store United Store</li>
                            <li><IoCallOutline />000-000-000</li>
                            <li><CiMail />sales@yourcompany.com</li>
                            
                        </ul>
                    </div>

                    </div>

            </div>
        </section>
        </>
    )
 }
 export default Footer