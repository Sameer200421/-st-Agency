
export default function Logo({icon}){

    return (
        <div className="border-white border-[2.3px] p-1 box-content rounded-full w-[35px] h-[35px] flex items-center justify-center">
            <img src={icon}  alt="" />
        </div>
    )
}