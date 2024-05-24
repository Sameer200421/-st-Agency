import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`${scrolled ? "bg-black" : ""} w-full fixed h-20 z-50 nav`}>
            <div className="flex w-11/12 md:w-3/4 mx-auto justify-between items-center pt-7 text-white">
                <div className="font-extrabold text-2xl">
                    <h3><span className="text-primary">!st</span> Agency</h3>
                </div>
                <div className={`text-xs font-semibold ${isMenuOpen ? 'flex' : 'hidden'} md:flex md:items-center md:w-3/4 gap-7 justify-end pr-3 max-md:flex-col max-md:pr-0 max-md:gap-1 max-md:ml-10 max-md:bg-black `}>
                    <a href="#home" className="hover:text-primary  ">HOME</a>
                    <a href="#about" className="hover:text-primary ">ABOUT US</a>
                    <a href="#blog" className="hover:text-primary ">BLOG</a>
                    <a href="#services" className="hover:text-primary ">SERVICES</a>
                    <a href="#pages" className="hover:text-primary ">PAGES</a>
                    <a href="#contact" className="hover:text-primary ">CONTACT US</a>
                </div>
                <div className="md:hidden flex flex-col justify-center items-center space-y-1 cursor-pointer" onClick={toggleMenu}>
                    <div className="w-6 h-1 bg-white"></div>
                    <div className="w-6 h-1 bg-white"></div>
                    <div className="w-6 h-1 bg-white"></div>
                </div>
            </div>
        </div>
    );
}
