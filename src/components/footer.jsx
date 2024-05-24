import Info from "./info";
import H2 from "./stylishh";
import Logo from "./logo";
import { email, phone, address,linkedin, facebook, google ,vk , z, yt,digg } from "../assets";

export default function Footer() {

    return (
    <section id="contact">
        <div className=" bg-black pt-20 pb-20 text-white">
            <div className="w-[90%] sm:w-[70%] xl:w-[70%] ml-auto mr-auto">
                <H2 label={"Contacts.."} />
                <div className="flex w-[100%] justify-between flex-wrap">
                    <div className="w-[100%] mdl:w-[50%]">
                        <h1 className="text-2xl font-mont font-black pt-4">Address Info</h1>
                        <div className="pt-16">
                            <Info label={"Email"} desc={"free@psdfreebies.com"} icon={email} />
                            <Info label={"Call Us!"} desc={"+123 456 7890"} icon={phone} />
                            <Info label={"Address"} desc={"123 Main Road , New City ,India , 123456"} icon={address} />
                        </div>
                    </div>
                    <div className="w-[100%] mdl:w-[50%]">
                        <h1 className="text-2xl font-mont font-black pt-4">Get In Touch</h1>
                        <div className="pt-16 ">
                            <div className="flex mt-3">
                                <label className="w-[100px]" htmlFor="">Name</label>
                                <input className="bg-[#2b2b2b] rounded-full ml-4 p-1 w-[100%]" type="text" />
                            </div>
                            <div className="flex mt-3">
                                <label className="w-[100px]" htmlFor="">Email</label>
                                <input className="bg-[#2b2b2b] rounded-full ml-4 p-1 w-[100%]" type="text" />
                            </div>
                            <div className="flex mt-3">
                                <label className="w-[100px]" htmlFor="">Phone</label>
                                <input className="bg-[#2b2b2b] rounded-full ml-4 p-1 w-[100%]" type="text" />
                            </div>
                            <div className="flex mt-3">
                                <label className="w-[100px]" htmlFor="">Message</label>
                                <textarea className="bg-[#2b2b2b]  ml-4 p-1 w-[100%] resize-none rounded-2xl" name="" id="" cols="30" rows="3"></textarea>
                            </div>
                            <a href="#"><button className="bg-[#0280f9] font-lato text-xs ml-24 mt-10 p-2 pl-10 pr-10 rounded-full">Submit</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-[98%] xs:w-[83%] md:w-[45%] ml-auto mr-auto justify-between mt-20 flex-wrap">
                    <Logo icon={facebook}/>
                    <Logo icon={google}/>
                    <Logo icon={vk}/>
                    <Logo icon={yt}/>
                    <Logo icon={linkedin}/>
                    <Logo icon={digg}/>
                    <Logo icon={z}/>
                </div>
                <p className="text-center pt-20 font-lato">Designed by PSDFreebird.com</p>
                <p className="text-center font-lato pt-3">COPYRIGHT 2017</p>
        </div>
    </section>
    )
}