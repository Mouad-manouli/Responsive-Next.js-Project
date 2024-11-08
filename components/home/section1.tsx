import Link from "next/link"
export default function Section1(){
    return(
        <>
            <section className="w-full h-[490px] bg-[url('/images/home_bg2.jpg')] md:bg-[url('/images/home_bg.jpg')] bg-no-repeat bg-[length:100%_490px] ">
                <div className="w-[90%] mx-auto">
                    <h2 className="text-[30px] sm:text-[37px] md:text-[35px] lg:text-[50px] text-white pt-[60px] lg:pt-[75px] font-candara">Ready to Handle </h2>
                    <h1 className="text-[30px] sm:text-[47px] md:text-[35px] lg:text-[45px] xl:text-[60px] text-[#2A4451] font-Sans font-bold pb-[35px] lg:mt-[-27px]">Any IT Problem Anytime .</h1>
                    <p className="text-[13px] md:text-[10px] lg:text-[13px] text-[#2A4451]   "><i >AtlasMachine is a maintenance management application for large indistrial machines, <br className="hidden sm:block"/>
                    offering emergency assistance and a real-time monitoring platform to minimize downtime <br className="hidden sm:block" />
                    and ensure efficient maintenance.</i></p>
                </div>
                <div className="w-[90%] mx-auto mt-16">
                    <Link href="#" className="text-white bg-customBlue  font-semibold px-3 py-3 mr-5">Get started</Link>
                    <Link href="#" className="text-customBlue font-semibold">Contact us</Link>
                </div>
            </section>
        </>
    )
}