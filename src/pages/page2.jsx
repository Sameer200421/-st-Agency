import H2 from "../components/stylishh";

export default function Page2() {

    return (
        <section id="about">
        <div className=" bg-[#0081ff] pt-16 pb-16">
            <div className=" text-white flex flex-col w-[90%] md:w-[70%] ml-auto mr-auto justify-between">
                <H2 label="Who we are" />
                <div className="flex flex-col lsm:flex-row w-100 justify-between pt-6">
                    <div className="w-[100%] lsm:w-[40%]">
                        <h1 className="text-2xl font-extrabold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <p className="font-lato pt-4 text-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque. omnis optio numquam sunt dolore similique laudantium.</p>
                        <a href="#"><button className={`bg-[#3b4374] mt-10 text-xs rounded-full pl-10 pr-10 p-2`}>Click here</button></a>
                    </div>
                    <div className="w-[100%] mt-10 lsm:mt-0 lsm:w-[50%]">
                        <p className="font-lato text-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laboriosam omnis optio numquam sunt dolore similique laudantium qui quia dolorem maxime architecto, labore nobis quaerat quasi quae corrupti iusto amet sequi recusandae natus voluptates ratione exercitationem accusamus! Autem aliquam quaerat minima illum officiis sunt magnam odit, tempora magni.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}