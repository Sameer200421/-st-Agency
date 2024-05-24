import Navbar from "../components/navbar"
import { hero } from "../assets"
import H2 from "../components/stylishh"

export default function Hero() {

    return (
        <section id="home">
        <div className="hero">
            {/* <div className="flex items-center w-[100vw] h-[130vh] relative"> */}
                <div className="text-white flex font-mont w-[90%] sm:w-[70%] items-center md:items-start md:justify-normal justify-center md:flex-row flex-col md:w-[86%] lg:w-[70%] pt-[157px] lg:pt-[100px] ml-auto mr-auto">
                    <div className="w-[100%] md:w-[50%] pt-6 lg:pt-20">
                        <div>
                            <H2 label="Hello"/>
                            <h1 className="pt-2 text-3xl font-extrabold">My Name is <span className="text-primary">John Doe</span></h1>
                            <p className="text-xl font-bold pt-2">Ceo | !st Agency</p>
                        </div>
                        <p className="text-sm font-lato pt-6 mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et perspiciatis ut in exercitationem. Ipsa, sequi ducimus iusto, reprehenderit aspernatur adipisci itaque ea ad eveniet praesentium sapiente. Nam soluta laboriosam est quasi sint, quod ipsam iure fugit aperiam, veritatis nesciunt.</p>
                        <a href="#" ><button className={`bg-[#00aeed] text-xs rounded-full pl-10 pr-10 p-2`}>Click me</button></a>
                    </div>
                    <div className="md:block hidden md:w-[50%] z-40">
                        <img src={hero} alt="" />
                    </div>
            </div>
        </div>
        </section>
    )
}