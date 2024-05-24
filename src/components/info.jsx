
export default function Info({label , desc , icon}){
    return (
        <div className="flex font-lato items-center mb-10 ml-[-30px] w-[100%]">
            <div className="w-[100px] h-[40px] justify-center flex">
            <img className="object-contain w-[40%]" src={icon} alt="" />
            </div>
            <div className="">
                <h2>{label}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}