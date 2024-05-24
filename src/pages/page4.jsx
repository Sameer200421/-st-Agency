import H2 from "../components/stylishh";
import { one, two, three, four, five, six } from "../assets"
 
export default function Page4() {

    return (
        <section id="pages">
        <div className="flex pt-20 flex-col">
            <div className="text-center w-[100%]">
                <H2 label={"Profile"} />
                <h1 className="font-mont font-black text-xl">I Make Beautiful Thinks</h1>
            </div>

            <div className="grid grid-cols-1 gap-0 mt-10 md:mt-0 md:grid-cols-4 md:grid-rows-[1fr_0.5fr] img-grid">
                <div className="overflow-hidden md:col-span-2 md:w-[100.01%]">
                    <img src={one} className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden md:col-start-1 md:row-start-2 md:h-56">
                    <img src={two} className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden md:col-start-2 md:row-start-2 md:h-56">
                    <img src={three} className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden md:row-span-4 md:col-start-3 md:row-start-1">
                    <img src={four} className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden md:col-start-4 md:row-start-1">
                    <img src={five} className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden md:col-start-4 md:row-start-2 md:h-56">
                    <img src={six} className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
        </section>
    )
}