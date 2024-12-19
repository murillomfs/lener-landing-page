import Image from "next/image";
export default function Footer() {
    return (
        <>
            <footer className="bg-white py-[50px] px-[30px] smartphone:py-[30px]">
                <div className="flex flex-col justify-center items-center text-center gap-[30px]">
                    <p className="text-3xl text-[#00000080] font-medium smartphone:text-xl">Rua Pedro Lobo, 55 - Centro | Joinville • CEP 89201-430</p>

                    <div className="flex flex-row items-center gap-[20px]">
                        <a href="https://www.facebook.com/profile.php?id=61559297120646" target="_blank" className=" transition-all hover:opacity-80">
                            <Image
                                src="/facebook.png"
                                alt="Lener Imóveis" 
                                width={46}
                                height={46}
                                className="smartphone:w-[30px] smartphone:h-[30px]"
                            />
                        </a>

                        <a href="https://www.instagram.com/lenerimoveis/" target="_blank" className=" transition-all hover:opacity-80">
                            <Image
                                src="/instagram.png"
                                alt="Lener Imóveis" 
                                width={46}
                                height={46}
                                className="smartphone:w-[30px] smartphone:h-[30px]"
                            />
                        </a>

                        <a href="https://api.whatsapp.com/send?phone=5547991190157" target="_blank" className=" transition-all hover:opacity-80">
                            <Image
                                src="/whatsapp.png"
                                alt="Lener Imóveis" 
                                width={46}
                                height={46}
                                className="smartphone:w-[30px] smartphone:h-[30px]"
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}