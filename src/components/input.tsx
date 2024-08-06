'use client'

import Image from "next/image";
import { useEffect, useState } from "react";


export type HandleProps = {
  flag: string
  name: string
}
type Props = {
  readonly?: boolean
  IsValuefLag: (value: HandleProps) => void;
  isValueFlagSelected: HandleProps
  isChange: boolean
}

export function Input({readonly,IsValuefLag, isValueFlagSelected, isChange}: Props) {
  const [isFlag, setIsFlag] = useState<HandleProps>({flag:'fi fi-br fis',name:'BRL'})
  const [isFlagSelected, setIsFlagSelected] = useState<HandleProps>({flag:'',name:''})

  function handleSelected({flag,name}:HandleProps ){
    setIsFlag({
      flag,
      name
    })
    IsValuefLag({
      flag,
      name
    })
  } 

  useEffect(()=>{
    setIsFlagSelected(isValueFlagSelected)
  },[isValueFlagSelected])


  return (
    <>
      <div className="outline outline-2 outline-darkSlate h-[5.6rem] w-[29.2rem] rounded-xl relative hover:outline-darkPurple has-[:focus]:outline-darkPurple">
        <input type="text" className="w-[60%] h-[5.6rem] outline-none pl-6 " value="$1.000" readOnly={readonly}/>
        <div className="absolute top-0 w-[12rem] right-0 h-[5.6rem] flex flex-col transition-all overflow-hidden hover:h-fit hover:overflow-visible  before:content-['|'] before:absolute before:text-darkSlate before:left-[-2px] before:top-6">
          <div className="flex py-6 transition-all ease-in-out justify-center items-center gap-3 hover:bg-darkPink rounded-tr-2xl rounded-br-2xl">
            <span className={isChange? `${isFlagSelected.flag}`:`${isFlag.flag}`}></span>
            { isChange?  isFlagSelected.name : isFlag.name}
            <Image
              src={require('../../assets/arrow.svg')}
              alt="flag-image"
            />
          </div>

          <ul className="bg-white mt-[.8rem] shadow-black border-2 flex flex-col gap-3 list-none w-[16rem] rounded-[.8rem]">
            <li onClick={()=> handleSelected({flag:'fi fi-br fis',name:'BRL'})}>
              <span className="fi fi-br fis"></span>
              BRL
            </li>
            <li onClick={()=>handleSelected({flag: 'fi fi-us fis', name: 'USD'})}>
              <span className="fi fi-us fis"></span>
              USD
            </li>
            <li onClick={()=>handleSelected({flag: 'fi fi-eu fis', name: 'EUR'})}>
              <span className="fi fi-eu fis"></span>
              EUR
            </li>
            <li onClick={()=>handleSelected({flag: 'fi fi-gb fis', name: 'GBP'})}>
              <span className="fi fi-gb fis"></span>
              GBP
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}