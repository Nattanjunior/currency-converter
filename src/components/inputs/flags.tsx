import type { HandleProps } from "."

type Props = {
  ValueSelected: ({flag,name} : HandleProps) => void
}

export function Flags({ValueSelected} : Props) {

  function handleSelected({ flag, name }: HandleProps) {
    ValueSelected({flag, name})
  }
  return (
    <>
      <ul className="bg-white mt-[.8rem] shadow-black border-2 flex flex-col gap-3 list-none w-[16rem] rounded-[.8rem]">
        <li onClick={() => handleSelected({ flag: 'fi fi-br fis', name: 'BRL' })}>
          <span className="fi fi-br fis"></span>
          BRL
        </li>
        <li onClick={() => handleSelected({ flag: 'fi fi-us fis', name: 'USD' })}>
          <span className="fi fi-us fis"></span>
          USD
        </li>
        <li onClick={() => handleSelected({ flag: 'fi fi-eu fis', name: 'EUR' })}>
          <span className="fi fi-eu fis"></span>
          EUR
        </li>
        <li onClick={() => handleSelected({ flag: 'fi fi-gb fis', name: 'GBP' })}>
          <span className="fi fi-gb fis"></span>
          GBP
        </li>
      </ul>
    </>
  )
}