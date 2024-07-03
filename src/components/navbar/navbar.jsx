import '../../assrsts/style/index.css';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
function Navbar() {

    return (
        <>
            <section id="nav">
                <div><Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOHfXW1IVNffhauFIaKXocs_LMNSL9-C-YiEZtVgooZFmnPLL35Pq8HxBJr5Dt1hLGR0&usqp=CAU" alt="..."  height={"100px"} width={"100px"} id='img'/></Link></div>
                <input type='text' placeholder='search' id='input'></input>
                <div><Link to="/Sculpture" style={{color:"black"}}>Sculpture</Link></div>
                <div><Link to="/Frames" style={{color:"black"}}>Frames</Link></div>
                <div><Link to="/Relief" style={{color:"black"}}>Relief</Link></div>
                <div><Link to="/Statue" style={{color:"black"}}>Statue</Link></div>
                <div><Link to="/More" style={{color:"black"}}>More</Link></div>
                
                 <div><CgProfile /></div>
                 <div><IoCartOutline /></div>
            </section>
           
        </>
    )
}
export default Navbar;