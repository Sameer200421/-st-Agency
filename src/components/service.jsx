
export default function Service({icon}){
    return (
        <div className="flex mt-14 w-[80%] md:w-[28%]">
            <div className="w-56 md:h-56">
                <img src={icon} className="w-100 h-100 object-cover"/>
            </div>
            <div className="font-lato ml-3 md:ml-7">
                <h2 className="font-black text-sm uppercase tracking-[1px] leading-5">Lorem Ipsum Dolor Sit Amet</h2>
                <p className="text-sm pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda tempore dolor provident esse ad! Totam, velit commodi ipsum veniam odio aperiam.</p>
            </div>
        </div>
    )
}