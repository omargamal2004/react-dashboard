import H1 from "./components/H1"
import H2 from "./components/H2"
import H2number from "./components/H2number";
import Img from "./components/Img";
import LabelText from "./components/LabelText";
import NumberDisplay from "./components/NumberDisplay";

import P from "./components/P";
import P2 from "./components/P2";
import StatLabel from "./components/StatLabel";




export default function Home() {
  return (

   <main className="flex justify-center items-center h-screen bg-[#0c0f17] text-white font-sans">
   <div className="flex w-4/5 bg-[#111322] p-10 rounded-lg shadow-lg">
      <div className="flex-1 pr-10">
        <H1 className="text-[30px] font-bold" >Get <span  className="text-purple-500">insights</span> that help <br /> your business grow.</H1>
      <P className="mt-24 text-[#b3b3b3]">Discover the benefits of data analytics and make <br /> better decisions regarding revenue, customer <br /> experience, and overall efficiency</P>
        <div className="flex gap-6 mt-24">


          <div className="text-center" >
          
            <H2 className="text-2xl">10k+</H2>
            <P2 className="text-sm text-[#a1a1a1] mt-5">COMPANIES</P2>
          </div>


          <div className="text-center">
            <H2number className="text-2xl">314</H2number>
            <StatLabel className="text-sm text-[#a1a1a1] mt-5">TEMPLATES</StatLabel>
          </div>

          <div className="text-center">
            <NumberDisplay className="text-2xl">12M+</NumberDisplay>
            <LabelText className="text-sm text-[#a1a1a1] mt-5">QUERIES</LabelText>
          </div>
        </div>
      </div>


       <div  className="flex-1 relative">
        <Img src="/image-header-desktop.jpg"
         alt="image-header-desktop"
         className="w-full h-auto rounded-lg"/>
    </div>

    </div>

   
   




   </main>


    
  );
}
