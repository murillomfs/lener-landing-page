import Image from "next/image";
export function Header() {
    return (
        <>
            <header className="py-[15px]">
                <div className="container">
                    <a href="/" className="smartphone:flex smartphone:justify-center">
                        <Image
                            src="/logo.png"
                            alt="Lener Imóveis"
                            aria-hidden="true"
                            width={321}
                            height={169}
                            priority
                        />
                    </a>
                </div>
            </header>
        </>
    )
}