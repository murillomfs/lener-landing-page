import FormTalkExport from "@/components/form-talk-expert";
import PlaceLener from "@/components/place-lener";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <div className="pt-[50px] pb-[120px] smartphone:pt-[30px] smartphone:pb-[50px]">
        <div className="container">
          <div className="grid grid-cols-2 gap-[10px] smartphone:grid-cols-1 smartphone:gap-[30px] tablet:grid-cols-1 tablet:gap-[30px]">
            <div className="flex flex-col gap-[30px]">
              <h1 className="text-[85px] leading-[100px] font-normal text-black smartphone:text-4xl smartphone:text-center tablet:text-6xl monitor:text-6xl">Um futuro sólido começa com o <strong className="font-bold">investimento certo</strong></h1>

              <p className="text-[32px] leading-[40px] text-black font-normal w-[90%] smartphone:text-lg smartphone:w-full smartphone:text-center tablet:text-2xl monitor:text-3xl">A Lener Imóveis facilita a realização dos seus sonhos através de investimentos imobiliários estratégicos.</p>
            </div>

            <div>
              <FormTalkExport />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1F1F1F] py-[65px] smartphone:py-[30px]">
        <div className="container mx-auto max-w-[1440px] px-4">
          <div className="flex flex-row justify-end gap-8 relative tablet:gap-10">
            <Image
              src="/hand-house.png"
              alt="Lener Imóveis"
              className="absolute bottom-[-65px] left-0 smartphone:hidden tablet:left-[-20%] tablet:w-[60%]" 
              width={555}
              height={555}
            />

            <div className="max-w-[870px] smartphone:max-w-full smartphone:text-center tablet:max-w-[400px] monitor:max-w-[500px] header-space:max-w-[870px]">
              <h2 className="text-white text-[40px] leading-[50px] font-medium mb-[30px] w-[85%] smartphone:text-3xl smartphone:mb-[20px] smartphone:w-full tablet:text-2xl tablet:w-full monitor:text-3xl high-monitor:w-full">Mercado imobiliário tem a maior valorização dos últimos 10 anos</h2>

              <p className="text-white text-3xl font-normal w-[75%] smartphone:text-lg smartphone:w-full tablet:text-lg tablet:w-full monitor:text-xl high-monitor:w-full">A alta do índice demonstra o aquecimento do mercado nacional, com destaque para Santa Catarina, que tem quatro cidades com o metro quadrado mais valorizado do país.</p>
            </div>
          </div>
        </div>
      </div>
      
      <PlaceLener />
    </>
  );
}
