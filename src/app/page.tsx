import ApexChart from "@/components/charts";
import  Inputs from "@/components/inputs";



export default function Home() {
  return (
    <>
      <main className="bg-black w-full h-screen grid place-items-center">
        <div className="bg-white flex flex-col gap-[6.4rem] max-md:gap-10 items-center w-[80rem] rounded-2xl py-32 max-md:pt-14 max-md:w-[33rem] max-md:rounded-[1.6rem]"> 
          <Inputs />
          <ApexChart />
        </div>
      </main>
    </>
  );
}
