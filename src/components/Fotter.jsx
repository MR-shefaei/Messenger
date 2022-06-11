import React from 'react';
import { logosfacebook, Icon } from '@iconify/react';

const Footer = () => {
    const navigation = [
        { name: 'Home', href: '#' },
        { name: 'Bisiness', href: '#' },
        { name: 'Economic', href: '#' },
        { name: 'Markets', href: '#' },
        { name: 'Commodities', href: '#' },
        { name: 'Tech', href: '#' },
    ]
    const pages = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Privaicy Policy', href: '#' },
        { name: 'Terms&Services', href: '#' },
        { name: 'SignIn/Up', href: '#' },
    ]
    return (
    <React.Fragment>
        <div className="w-full h-60 bg-gray-300 mb-10 pl-20  ">
            <div className="grid grid-cols-3">
                <div className="">
                    <div className="font-serif py-12">
                        <h1 className="text-2xl font-bold ">Let's keep in touch!</h1>
                        <h4>Find us on any of these platforms.</h4>
                    </div>
                    <div className="">
                        <span className="inline-flex items-center p-3 mr-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                            <a href="#"><Icon icon="brandico:facebook-rect" /></a>
                        </span>
                        <span className="inline-flex items-center p-3 mr-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                            <a href="#"> <Icon icon="akar-icons:instagram-fill" /></a>
                        </span>
                        <span className="inline-flex items-center p-3 mr-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                            <a href="#"><Icon icon="akar-icons:twitter-fill" /></a>
                        </span>
                        <span className="inline-flex items-center p-3 mr-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                            <a href="#"><Icon icon="akar-icons:linkedin-v1-fill" /></a>
                        </span>
                        <span className="inline-flex items-center p-3 mr-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                            <a href="#"><Icon icon="akar-icons:youtube-fill" /></a>
                        </span>

                    </div>

                </div>
                
                <div className=" mt-5  ">
                    <div className="text-bold ">
                        CATEGORIES
        
                </div>
                    {navigation.map((link) => (
                        <a key={link.name} href={link.href} className="font-serif text-black font-medium block  mr-20  ">
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className=" mt-5  ">
                    <div className="text-bold ">
                        Pages
            </div>

                    {pages.map((link) => (
                        <a key={link.name} href={link.href} className="font-serif text-black font-medium block  mr-20  ">
                            {link.name}
                        </a>
                    ))}
   
                </div>
            </div>
        </div>
        <div className=" font-serif flex justify-center  ">Copyright © 2022 Reserved by Mitch Cumm</div>
    </React.Fragment>
    );
}

export default Footer;
