import Head from 'next/head';
import React from 'react'
import Link from 'next/link';
import Router from 'next/router';

const Layout = ({ children }) => {
    const head = () => (
        <React.Fragment>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"
            />
            <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" 
                integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" 
                crossOrigin="anonymous" 
                
            />
            <link 
                rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" 
                integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" 
                crossOrigin="anonymous" 
               
            />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet"></link>
           
        
        </React.Fragment>
    );

   

    const nav = () => (
        <>
        <nav className="navbar bg-dark">
            <div className="container centered">
                <div className=''>
                <a className="navbar-brand  text-white h-6 p-2 border border-white" href="#">MyTestApp</a>
                </div>
            </div>
        </nav>

        </>
    );

    return (
        <React.Fragment>
            {head()} {nav()} <div className="">{children}</div> 
        </React.Fragment>
    );
};

export default Layout;