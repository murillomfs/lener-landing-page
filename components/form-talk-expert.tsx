'use client'

import { useState } from "react";
import Image from "next/image";
import { InputMask } from 'primereact/inputmask';
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

import { sendContactForm } from '../actions/sendContactForm'
import { contactFormInputs } from '../utils/contact-form-inputs'


export default function FormTalkExport() {
  const [selectedFlag, setSelectedFlag] = useState("/brasil-flag.png");
  const [isOpen, setIsOpen] = useState(false);

  const handleFlagChange = (flag:any) => {
    setSelectedFlag(flag);
    setIsOpen(false);
  };

  const flags = [
    { value: "/brasil-flag.png", label: "Brasil" },
    { value: "/spain-flag.png", label: "Espanha" },
    { value: "/eua-flag.png", label: "EUA" },
  ];

  const [pending, setPending] = useState(false)

    function handleChange(form: FormData) {
      setPending(true)

      setTimeout(async () => {
          const response: any = await sendContactForm(form)

          if(response.status == 200) {
              toast.success(response.message, {
                  position: 'bottom-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'dark'
              })
  
              const formInputs: any = document.querySelector('.event-form')
          
              for (let i = 0; i < formInputs.elements.length; i++) {
                  formInputs.elements[i].value = ''
              }
  
              setPending(false)
          } else {
              toast.error(response.message, {
                  position: 'bottom-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'dark'
              })
  
              const formInputs: any = document.querySelector('.event-form')
          
              for (let i = 0; i < formInputs.elements.length; i++) {
                  formInputs.elements[i].value = ''
              }
  
              setPending(false)
          }
      }, 3000)
    }

  return (
    <>
      <div className="bg-[#1f1f1f26] rounded-[25px] px-[25px] py-[30px] flex flex-col justify-between gap-8">
        <div className="flex flex-col justify-center text-center">
          <p className="text-2xl font-normal text-black smartphone:text-base">
            Comece agora a planejar seu futuro.
          </p>

          <span className="text-4xl font-medium text-black smartphone:text-xl">
            Fale com um especialista!
          </span>
        </div>

        <div>
          <form action="/thanks-lener" className="flex flex-col gap-4">
            <div>
              <input
                type="text"
                name="nome"
                placeholder="Nome*"
                className="w-full h-14 rounded-[7px] bg-white px-[10px] outline-0"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                className="w-full h-14 rounded-[7px] bg-white px-[10px] outline-0"
              />
            </div>

            <div className="grid grid-cols-[.15fr,.85fr] gap-4 cursor-pointer smartphone:grid-cols-[.3fr,.7fr] monitor:grid-cols-[.2fr,.8fr]">
              <div className="relative bg-white rounded-[7px] h-14 flex items-center p-3">
                <div
                  className="cursor-pointer flex items-center w-full relative"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Image
                  width={54}
                  height={26}
                    src={selectedFlag}
                    alt="Bandeira selecionada"
                    className="w-[35px] h-[25px] mr-2"
                  />

                <svg width="26" height="15" viewBox="0 0 26 15" fill="none" className="absolute top-0 bottom-0 my-auto right-0 w-[20px]">
                    <path d="M14.5389 14.3672L25.3633 3.67063C25.5652 3.47116 25.7253 3.23436 25.8345 2.97375C25.9438 2.71313 26 2.43381 26 2.15172C26 1.58202 25.771 1.03565 25.3633 0.632805C25.1615 0.433339 24.9218 0.275113 24.6581 0.167162C24.3944 0.0592119 24.1117 0.00365189 23.8263 0.00365188C23.2497 0.00365185 22.6968 0.229964 22.2892 0.632805L13.0018 9.83185L3.7145 0.632804C3.51325 0.43229 3.27381 0.273138 3.01 0.164527C2.74619 0.0559174 2.46323 -1.02883e-06 2.17744 -1.04132e-06C1.89165 -1.05381e-06 1.60868 0.0559173 1.34487 0.164527C1.08106 0.273138 0.841625 0.43229 0.640371 0.632804C0.43746 0.831681 0.276401 1.06829 0.166494 1.32899C0.0565852 1.58968 1.82564e-06 1.8693 1.81329e-06 2.15172C1.80095e-06 2.43413 0.0565852 2.71375 0.166494 2.97445C0.276401 3.23514 0.43746 3.47175 0.640371 3.67063L11.4648 14.3672C11.666 14.5677 11.9055 14.7269 12.1693 14.8355C12.4331 14.9441 12.7161 15 13.0018 15C13.2876 15 13.5706 14.9441 13.8344 14.8355C14.0982 14.7269 14.3377 14.5677 14.5389 14.3672Z" fill="#B5B5B5"/>
                </svg>

                </div>

                {isOpen && (
                  <div className="absolute top-[102%] left-0 w-full bg-white border border-gray-200 rounded-[7px] z-10">
                    {flags.map((flag) => (
                      <div
                        key={flag.value}
                        className="flex justify-center items-center py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleFlagChange(flag.value)}
                      >
                        <Image
                        width={54}
                        height={26}
                          src={flag.value}
                          alt={flag.label}
                          className="w-[35px]"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <InputMask
                id="phone"
                mask="(99) 99999-9999"
                placeholder="Celular"
                className="w-full h-14 rounded-[7px] bg-white px-[10px] outline-0"
              />
            </div>

            <div className="w-full flex justify-end">
              <button className="cursor-pointer bg-white h-14 rounded-[7px] p-[15px] text-black text-[20px] font-normal flex justify-center items-center transition-colors hover:bg-black hover:text-white smartphone:w-full smartphone:text-center">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
