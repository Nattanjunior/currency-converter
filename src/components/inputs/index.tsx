'use client'

import Image from "next/image";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Input } from "../input";
import { useState } from "react";
import { HandleProps } from "../input";

export function Inputs() {
  const [isValueFlagOne, setIsValueFlagOne] = useState<HandleProps>({ flag: '', name: '' })
  const [isValueFlagTwo, setIsValueFlagTwo] = useState<HandleProps>({ flag: '', name: '' })
  const [isChange, setIsChange] = useState(false)

  function isSelectedValueFlag() {
    setIsValueFlagTwo(isValueFlagOne)
    setIsValueFlagOne(isValueFlagTwo)
    setIsChange(true)
    /*
      if(isChange){
        setIsValueFlagTwo(isValueFlagTwo)
        setIsValueFlagOne(isValueFlagOne)
      }
    * */
    console.log(isValueFlagTwo)
    console.log(isValueFlagOne)
  }

  return (
    <>
      <section>
        <h2 className="mb-6 text-4xl">Conversor de moedas</h2>
        <div className="flex flex-wrap">
          <Input
            IsValuefLag={(value) => setIsValueFlagOne(value)}
            isValueFlagSelected={isValueFlagTwo}
            isChange={isChange}
          />
          <div className="px-8 flex">
            <Image
              src={require('../../../assets/Vector.svg')}
              alt="image-vector"
              className=""
              onClick={isSelectedValueFlag}
            />
          </div>
          <Input
            readonly={true}
            IsValuefLag={(value) => setIsValueFlagTwo(value)}
            isValueFlagSelected={isValueFlagOne}
            isChange={isChange}
          />
        </div>

      </section>
    </>
  )
}