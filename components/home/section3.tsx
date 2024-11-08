export default function Section3(){
    return(
        <>
            <section className="w-full flex flex-col md:flex-row px-14 lg:px-32 xl:px-56 py-16 gap-10 lg:gap-20">
                <div className="w-full md:w-[40%] h-[400px]  bg-[url('/images/home_bg3.jpg')] bg-no-repeat bg-cover  bg-[length:full_400] ">
                    <div className="w-[150px] h-[70px] bg-[#2A4451] -ml-[30px] -mt-[30px] text-center py-1">
                        <p className="text-white text-3xl font-bold">100%</p>
                        <p className="text-white ">high-quality</p> 
                    </div>
                </div>
                <div className="w-full md:w-[60%]  pt-0 md:pt-10 lg:pt-0">
                    <h2 className="text-[#B3D6EC] text-lg">----- Who We Are</h2>
                    <h1 className="text-[#2A4451] text-[18px]  md:text-[25px] lg:text-[38px]  font-semibold py-3 md:py-0">The Priceless Service <br className="hidden md:block"/> You Can Afford And <br className="hidden md:block"/> Trust.</h1>
                    <p className="text-[12px] md:text-[13px] font-candara pb-4 ">We offer high-quality IT maintenance services, including monthly maintenance and emergency interventions. Trust our expertise to keep your IT systems in perfect working order</p>
                    <div className="flex flex-row">
                        <svg color="#B3D6EC"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-lg mt-1 mr-3" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                        </svg>
                        <p className="text-gray-700">Monthly IT Maintenance</p>
                    </div>
                    <div className="flex flex-row pb-12">
                        <svg color="#B3D6EC"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-lg mt-1 mr-3" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                        </svg>
                        <p className="text-gray-700">24/7 Emergency Intervention</p>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex flex-row ">
                            <div className="flex flex-row pr-12">
                                <svg   xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cash-coin text-gray-900 h-[25px] w-[25px] lg:h-[35px] lg:w-[35px]" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
                                    <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
                                    <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
                                    <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
                                </svg>
                                <p className="text-[12px] sm:text-[15px] lg:text-[20px] ml-5 font-semibold text-gray-900">Plumbing exports</p>
                            </div>
                            <div className="flex flex-row">
                                <svg   xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-hourglass-split text-gray-900 h-[25px] w-[25px] lg:h-[35px] lg:w-[35px]" viewBox="0 0 16 16">
                                    <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                                </svg>
                                <p className="text-[12px] sm:text-[15px] lg:text-[20px] ml-5 font-semibold text-gray-900">Short time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}