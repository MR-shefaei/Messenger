import React from 'react';


const Business = () => {
    return ( 
        <React.Fragment>
             <div className="ml-10 text-2xl font-serif underline underline-offset-8  decoration-orange-400">Buisness</div>
            <h4 className="ml-10 font-serif mt-4">The Business</h4>

            <div className=" m-10 grid  grid-cols-3 gap-3 ">
                <div className="max-w-md max-h-lg rounded shadow-lg grid justify-items-center font-serif border-b-orange-400 border-4 col-span-1 text-black">
                   <a href="#"> <img className="w-full" src="/imag/computer.jpg
                    " alt="a good place in Afghanistan" /></a>
                    <h4 >Business</h4>
                    <p className="text-2xl"><a className="hover:underline decoration-orange-400" href="#">third business second business</a></p>
                    <p className="mt-3">secound business second business </p>
                    <a href="#" className="hover:underline decoration-orange-400 mt-3 text-orange-400 text-xl">More</a>

                </div>
                <div className="max-w-md max-h-md rounded shadow-lg grid justify-items-center font-serif border-b-orange-400 border-4 col-span-1 text-black">
                    
                    <a href="#"><img className="w-full" src="/imag/collegue.jpg" alt="a good place in Afghanistan" /></a>
                    <h4 >Business</h4>
                    <p className="text-2xl"><a className="hover:underline decoration-orange-400" href="#">third business second business</a></p>
                    <p className="mt-3">secound business second business </p>
                    <a href="#" className="hover:underline decoration-orange-400 mt-3 text-orange-400 text-xl">More</a>

                </div>
                <div className="max-w-md max-h-md rounded shadow-lg grid justify-items-center font-serif border-b-orange-400 border-4 col-span-1 text-black">
                    
                   <a href="#"> <img className="w-full" src="/imag/worketeam.jpg" alt="a good place in Afghanistan" /></a>
                    <h4 >Business</h4>
                    <p className="text-2xl"><a className="hover:underline decoration-orange-400" href="#">third business second business</a></p>
                    <p className="mt-3">secound business second business </p>
                    <a href="#" className="hover:underline decoration-orange-400 mt-3 text-orange-400 text-xl">More</a>

                </div>



            </div>

        </React.Fragment>

     );
}
 
export default Business;