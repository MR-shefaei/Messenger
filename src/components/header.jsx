import React,{useState} from 'react';
import Content from './content';
import { Link } from 'react-router-dom';
import Modal from './modal';



const Header = (props) => {
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Bisiness', href: '/busieness' },
        { name: 'Economic', href: '/economic' },
        { name: 'Markets', href: '/markets' },
        { name: 'Commodities', href: '/commodities' },
        { name: 'Tech', href: '/tech' },
    ]
    const [open, setOpen] = useState(false);

    const hidemodal=()=>{
        setOpen(false);
    }

    return (
        <React.Fragment>
            <div className="justify-between ml-10 mt-10 mr-20 flex  ">


                <div className=" font-serif ml-2 flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    MitckCummContact@gmail.com
                </div>
                <h1 className="text-5xl font-serif mr-14">MITCH CUMM</h1>
                <div className="flex text-2 hover:text-orange-300"><button onClick={()=>setOpen(true)} >
                    Sign In
                         </button> <svg xmlns="http://www.w3.org/2000/svg" className=" w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0   1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="border-t border-slate-200 "></div>

            <header >
                <nav className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
                    <div className="w-full py-6 flex items-center justify-between  ">
                        <div className="flex items-center ">
                            <div className=" ml-10 space-x-8  ">
                                {navigation.map((link) => (
                                    <Link  to={link.href}  key={link.name}className="font-serif text-base text-black font-medium hover:text-orange-300">
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="float-right relative right-0 ">
                                    <label htmlFor="search" className="flex">
                                        <input type="search" id="search" className="bg-gray-200  items-end p-1 rounded border-r border-slate-900 border-r-4" placeholder="Search..." />
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 absolute right-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </label>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            
    <Modal open={open} setOpen={hidemodal}/>
    
        </React.Fragment>

    );
}

export default Header;