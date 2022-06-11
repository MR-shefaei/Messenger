import React from 'react'



const Market = () => {
    return (
        <React.Fragment>
             <div className="ml-10 text-2xl font-serif underline underline-offset-8  decoration-orange-400">Markets</div>
            <h4 className="ml-10 font-serif mt-4">The Market</h4>
            <div className=" m-10 grid  grid-cols-3 gap-3 ">
                <div className="max-w-md max-h-md rounded shadow-lg grid justify-items-center font-serif border-b-orange-400 border-4 col-span-1 text-black">
                    
                   <a href="#"> <img className="w-full " src="/imag/market1.jpg" alt="a good place in Afghanistan" /></a>
                    <h4 >Market</h4>
                    <a className="hover:underline decoration-orange-400" href="#"><p className="text-2xl">Ecnomic is best</p></a>
                    <p className="mt-3">Short discription </p>
                    <a href="#" className="hover:underline decoration-orange-400 mt-3 text-orange-400 text-xl">More</a>

                </div>
                <div className="max-w-md max-h-md rounded shadow-lg grid justify-items-center font-serif border-b-orange-400 border-4 col-span-1 text-black">
                
                  <a href="#">  <img className="w-full" src="/imag/market2.jpg" alt="a good place in Afghanistan" /></a>
                    <h4>Economic</h4>
                    <a className="hover:underline decoration-orange-400 " href="#"> <p className="text-2xl truncate w-80">Organizations allow teams of contributors to read, write, and public and private packages. Organizations are free when they publish public packages. When organizations publish private</p></a>
                    <p className="mt-3">secound business second business </p>
                    <a href="#" className="hover:underline decoration-orange-400 mt-3 text-orange-400 text-xl">More</a>

                </div>
                <div className="max-w-md max-h-md rounded shadow-lg grid justify-items-center font-serif border-b-orange-400 border-4 col-span-1 text-black ">
                    
                   <a href="#"> <img className="w-full" src="/imag/market3.jpg" alt="a good place in Afghanistan" /></a>
                    <h4 className="">Market</h4>
                    <a className="hover:underline decoration-orange-400 " href="#"> <p className="text-2xl truncate w-80">Documentation for the npm registry, website, and command-line interface</p></a>
                    <p className="mt-3">secound business second business </p>
                    <a href="#" className="hover:underline decoration-orange-400 mt-3 text-orange-400 text-xl">More</a>

                </div>



            </div>
          
            
        </React.Fragment>

      );
}
 
export default Market;