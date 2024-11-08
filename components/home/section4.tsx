import Link from 'next/link';
import {ArrowRightFromLine} from 'lucide-react';
import Image from 'next/image';

export default function  Section4(){
    return(
        <>
            <section className="w-full bg-[url('/images/image_section4.jpg')]  bg-no-repeat bg-cover bg-center px-16 lg:px-24 xl:px-44 pb-10 pt-20">
                <div className='pb-16'>
                    <p className='text-[#B3D6EC] pb-4'>------ OUR EXPERTISE</p>
                    <h1 className='text-white text-[35px] md:text-[45px] font-semibold mb-4 leading-tight'>Dedicated To Excellence <br className='hidden md:block'/> And Service .</h1>
                    <p className='text-[#9EAAB5] mb-6'><i>Our experts are ready to provide you with customized IT solutions to <br /> ensure your business continuity.</i></p>
                    <div className='flex flex-row bg-[#B3D6EC] text-white w-[150px] px-5 py-3'>
                        <Link href={"#"} >Learn More</Link>
                        <ArrowRightFromLine/>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row   gap-4'>
                    <Image src={'/images/bg1.jpg'} alt='img1' width={300} height={300} className='w-full sm:w-[33%] h-[200px] rounded-3xl'/>
                    <Image src={'/images/bg2.jpg'} alt='img2' width={300} height={300} className=' w-full sm:w-[33%] h-[200px] rounded-3xl'/>
                    <Image src={'/images/bg3.jpg'} alt='img3' width={300} height={300} className='w-full sm:w-[33%] h-[200px] rounded-3xl'/>
                </div>
            </section>
        </>
    )
}