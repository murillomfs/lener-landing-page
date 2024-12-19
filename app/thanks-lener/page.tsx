'use client'

import Image from "next/image";
import { useEffect } from "react";

export default function ThanksLener() {
    useEffect(() => {
        const header = document.querySelector("header") as HTMLElement;;
        const footer = document.querySelector("footer") as HTMLElement;;
        
        if (header) header.style.display = "none";  
        if (footer) footer.style.display = "none";  

        return () => {
            if (header) header.style.display = "";
            if (footer) footer.style.display = ""; 
        };
    }, []);
    
    return(
        <>
            <div className="h-screen relative flex flex-col justify-between items-center overflow-hidden py-[50px] smartphone:py-[30px] smartphone:px-[15px] tablet:py-[30px] tablet:px-[15px] smartphone-height:py-[30px]">
                <div className="flex flex-col items-center justify-center gap-[40px] h-[80%] smartphone:gap-[20px] smartphone:justify-between smartphone:text-center smartphone:h-[55%] tablet:h-[65%] monitor:justify-start smartphone-height:justify-start smartphone-height:gap-[20px]">
                    <a href="/" className="flex justify-center">
                        <Image
                            src="/logo.png"
                            alt="Lener Imóveis" 
                            width={321}
                            height={169}
                            className="smartphone:w-[80%]"
                        />
                    </a>

                    <div className="flex flex-col justify-center items-center gap-[30px]">
                        <span className="text-[200px] leading-[240px] font-bold text-black text-center smartphone:text-[70px] smartphone:leading-[80px] tablet:text-[80px] tablet:leading-[92px] monitor:text-[100px] monitor:leading-[114px]">Obrigado</span>
                        
                        <a href="https://api.whatsapp.com/send?phone=5547991190157" target="_blank" className="transition-all hover:opacity-80 smartphone:w-[80%] tablet:w-[85%] monitor:w-[90%] smartphone-height:w-[80%]">
                            <Image
                                src="/speak-expert.png"
                                alt="Lener Imóveis" 
                                width={752}
                                height={100}
                            />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-end items-center text-center h-[20%] gap-[30px]">
                    <p className="text-3xl text-[#00000080] font-medium smartphone:text-lg tablet:text-xl tablet:w-[80%] monitor:w-[70%] smartphone-height:text-xl">Rua Pedro Lobo, 55 - Centro | Joinville • CEP 89201-430</p>

                    <div className="flex flex-row items-center gap-[20px]">
                        <a href="https://www.facebook.com/profile.php?id=61559297120646" target="_blank" className=" transition-all hover:opacity-80">
                            <Image
                                src="/facebook.png"
                                alt="Lener Imóveis" 
                                width={46}
                                height={46}
                                className="smartphone:w-[35px] smartphone:h-[35px] smartphone-height:w-[35px] smartphone-height:h-[35px]"
                                
                            />
                        </a>

                        <a href="https://www.instagram.com/lenerimoveis/" target="_blank" className=" transition-all hover:opacity-80">
                            <Image
                                src="/instagram.png"
                                alt="Lener Imóveis" 
                                width={46}
                                height={46}
                                className="smartphone:w-[35px] smartphone:h-[35px] smartphone-height:w-[35px] smartphone-height:h-[35px]"
                            />
                        </a>

                        <a href="https://api.whatsapp.com/send?phone=5547991190157" target="_blank" className=" transition-all hover:opacity-80">
                            <Image
                                src="/whatsapp.png"
                                alt="Lener Imóveis" 
                                width={46}
                                height={46}
                                className="smartphone:w-[35px] smartphone:h-[35px] smartphone-height:w-[35px] smartphone-height:h-[35px]"
                            />
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-0 left-[5%] smartphone:hidden tablet:left-[-80px] tablet:w-[380px] monitor:left-[-5%] monitor:w-[40%] high-monitor:left-[-100px] showcase:left-0 smartphone-height:h-[350px] smartphone-height:left-[-5%]">
                    <Image
                        src="/hand-house.png"
                        alt="Lener Imóveis" 
                        width={555}
                        height={555}
                    />
                </div>
            </div>
        </>
    )
}