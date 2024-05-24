import H2 from "../components/stylishh";
import { logo1, logo2, logo3, logo4 , backlogos} from "../assets"

export default function Page5() {

    const img = "h-fit w-44 mt-3"

    return (
        <div className="text-white bg-[#000] pt-20 pb-20 bg-cover" style={{backgroundImage : `url(${backlogos})`, backgroundPositionX : "-200px"}}>
            <div className="w-[84%] sm:w-[70%] ml-auto mr-auto text-center">
                <H2 label={"Client"} />
                <h1 className="font-mont font-black text-2xl">What I Do..</h1>
                <p className="w-[80%] md:w-[50%] ml-auto mr-auto pt-4 text-sm leading-6 font-lato">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque rem sint nobis fugit, explicabo. Eligendi, explicabo.</p>
                <div className="flex pt-20 justify-center lsm:justify-between items-center flex-wrap">
                    <img className={img} src={logo1} alt="" />
                    <img className={img} src={logo2} alt="" />
                    <img className={img} src={logo3} alt="" />
                    <img className={img} src={logo4} alt="" />
                </div>
            </div>
        </div>
    )
}