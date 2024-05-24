import H2 from "../components/stylishh";
import { cardback } from "../assets";

export default function Page6() {
    return (
        <section id="blog">
        <div className="w-full pt-28 pb-28">
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 w-[93%] md:w-[70%] ml-auto mr-auto">
                <div className="md:col-span-2">
                    <H2 label={"Blog"} />
                    <h1 className="text-2xl font-black font-mont">I write Beautiful Thinks</h1>
                    <p className="font-lato leading-6 text-sm pt-6 font-semibold text-[#353535]">
                        Lorem ipsum, elit. Ducimus maxime, laboriosam possimus dolor quasi dolor sit amet consectetur adipisicing elit. Ducimus maxime, laborios optio.
                    </p>
                </div>
                <div className="text-white font-lato text-center md:col-span-2 md:col-start-1 md:row-start-2 justify-center pt-10 pb-7 pl-10 pr-10 flex flex-col bg-[#007ef9]">
                    <p className="font-semibold">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui exercitationem ex commodi, nemo culpa cum illo neque veritatis voluptatum.
                    </p>
                    <h3 className="pt-2 font-semibold">11 November</h3>
                </div>
                <div className="md:col-start-1 md:row-start-3 bg-[#eaeaea] text-[#353535] text-center flex justify-between p-4 pb-7 pt-7 flex-col">
                    <h3 className="pt-2 font-semibold font-lato">11 November</h3>
                    <h1 className="font-black font-mont text-2xl">Lorem Ipsum Dolor</h1>
                </div>
                <div className="md:col-start-2 md:row-start-3 bg-[#000] text-white text-center flex justify-between p-4 pb-7 pt-7 flex-col">
                    <h3 className="pt-2 font-semibold font-lato">11 November</h3>
                    <h1 className="font-black font-mont text-2xl">Lorem Ipsum Dolor</h1>
                </div>
                <div className="md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-1 p-6 text-white text-center flex justify-between flex-col" style={{ backgroundImage: `url(${cardback})` }}>
                    <h3 className="pt-2 font-semibold font-lato">11 November</h3>
                    <div>
                        <h1 className="font-black font-mont text-2xl">Lorem Ipsum Dolor</h1>
                        <p className="font-lato leading-6 text-sm font-semibold pt-2">
                            Lorem ipsum, dolor sit amet consectetur amet consectetur adipisicing consectetur amet consectetur adipisicing elit. Ducimus maxime, laboriosam possimus dolor.
                        </p>
                    </div>
                </div>
                <div className="md:col-span-2 md:row-start-3 bg-[#e91d62] p-2 pl-12 pr-12 text-white text-center">
                    <h3 className="pt-2 font-semibold font-lato">11 November</h3>
                    <h1 className="font-black font-mont text-2xl">Lorem Ipsum Dolor</h1>
                    <p className="font-lato leading-6 text-sm font-semibold pt-2">
                        Lorem ipsum, dolor sit amet consectetur amet consectetur adipisicing elit. Ducimus maxime, laboriosam possimus dolor.
                    </p>
                </div>
            </div>
        </div>
        </section>
    );
}
