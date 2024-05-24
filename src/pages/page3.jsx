import Service from "../components/service";
import H2 from "../components/stylishh";
import {eye , setting , share } from "../assets"

export default function Page3() {
    return (
        <section id="services">
        <div className="bg-[#007af3] pt-16 pb-16 text-white">
            <div className="w-[100%] xs:w-[94%] lg:w-[70%] ml-auto mr-auto">
                <div className="text-center">
                    <H2 label="Services" />
                    <h1 className="text-2xl font-extrabold">What I Do..</h1>
                </div>
                <div className="flex items-center md:flex-row flex-col justify-center md:justify-between">
                    <Service icon={share}/>
                    <Service icon={eye}/>
                    <Service icon={setting}/>
                </div>
            </div>
        </div>
        </section>
    )
}