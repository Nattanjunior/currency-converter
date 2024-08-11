'use client'

import { useState, useRef} from "react";
import { Flags } from "./flags";

import "/node_modules/flag-icons/css/flag-icons.min.css";
import Image from "next/image";


export type HandleProps = {
  flag: string
  name: string
}

export function Inputs() {
  const [isChange, setIsChange] = useState(false)
  const [CurrencyToConvert, setCurrencyToConvert] = useState<HandleProps>({ flag: 'fi fi-br fis', name: 'BRL' })
  const [CurrencyConverter, setCurrencyConverter] = useState<HandleProps>({ flag: 'fi fi-br fis', name: 'BRL' })
  const [InputValue, setInputValue] = useState('')
  const MyInput = useRef<HTMLInputElement>(null)


  const formatValue = (value: string) => {
    // Remove todos os caracteres não numéricos
    const numericValue = value.replace(/\D/g, "");

    // Adiciona separadores de milhar e vírgula decimal
    if (numericValue) {
      const integerPart = numericValue.slice(0, -2); // pegando os números que o usuário digitou, menos os ultimos dois números
      const decimalPart = numericValue.slice(-2); // pegando os ultimos dois números que o usuário digitou

      // Adiciona separadores de milhar
      const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Expressão regular que verifica se há um ou mais grupos de 3 digitos e garante que não há mais dígitos após o grupo, entre os grupos de 3 digitos, um (.) será adicionado.
      

      return `$${formattedIntegerPart},${decimalPart}`;
    }

    return '$';
  };

  // quando o usuáro clicar na arrow(seta), os valores dos inputs seram guardados em estados e seram trocados(o valor do input 1, vai para o input 2 e input 2 irá para o input 1)
  function exchangeValues() {
    setCurrencyToConvert(CurrencyConverter)
    setCurrencyConverter(CurrencyToConvert)
    setIsChange(!isChange)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    const Value = event.target.value;
    setInputValue(formatValue(Value))
  }


  return (
    <>
      <section>
        <h2 className="mb-6 text-4xl">Conversor de moedas</h2>
        <div className="flex flex-wrap">

          <div className="outline outline-2 outline-darkSlate h-[5.6rem] w-[29.2rem] rounded-xl relative hover:outline-darkPurple has-[:focus]:outline-darkPurple">
            <input type="text" className="w-[60%] h-[5.6rem] outline-none pl-6" ref={MyInput} inputMode="numeric" onChange={handleInputChange}  title="Digite apenas números" value={InputValue}/>
            <div className="absolute top-0 w-[12rem] right-0 h-[5.6rem] flex flex-col transition-all overflow-hidden hover:h-fit hover:overflow-visible  before:content-['|'] before:absolute before:text-darkSlate before:left-[-2px] before:top-6">
              <div className="flex py-6 transition-all ease-in-out justify-center items-center gap-3 hover:bg-darkPink rounded-tr-2xl rounded-br-2xl">
                <span className={CurrencyToConvert.flag}></span>
                {CurrencyToConvert.name}
                <Image
                  src={require('../../../assets/arrow.svg')}
                  alt="flag-image"
                />
              </div>

              <Flags ValueSelected={(Value)=> setCurrencyToConvert(Value)} />
            </div>
          </div>
          
          <div className="px-8 flex">
            <Image
              src={require('../../../assets/Vector.svg')}
              alt="image-vector"
              onClick={exchangeValues}
            />
          </div>

          <div className="outline outline-2 outline-darkSlate h-[5.6rem] w-[29.2rem] rounded-xl relative hover:outline-darkPurple has-[:focus]:outline-darkPurple">
            <input type="text" className="w-[60%] h-[5.6rem] outline-none pl-6" readOnly />
            <div className="absolute top-0 w-[12rem] right-0 h-[5.6rem] flex flex-col transition-all overflow-hidden hover:h-fit hover:overflow-visible  before:content-['|'] before:absolute before:text-darkSlate before:left-[-2px] before:top-6">
              <div className="flex py-6 transition-all ease-in-out justify-center items-center gap-3 hover:bg-darkPink rounded-tr-2xl rounded-br-2xl">
                <span className={CurrencyConverter.flag}></span>
                {CurrencyConverter.name}
                <Image
                  src={require('../../../assets/arrow.svg')}
                  alt="flag-image"
                />
              </div>

              <Flags ValueSelected={(Value)=> setCurrencyConverter(Value)}/>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}