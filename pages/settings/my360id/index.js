import React from 'react';
import css from './css.module.css'; 
import ToggleMenu from '../../../components/navbar&toggle/profile_nav&toggle/ptoggle_menu'
import { useState } from 'react';
import Image from 'next/image'
import Head from 'next/head';
import Navbar from '../../../components/navbar&toggle/profile_nav&toggle/pnavbar'
import Link from 'next/link';
import { FaChevronRight,FaChevronLeft } from 'react-icons/fa';
export default function Home (){
    return(
        <>
     <div className={css.body}>
         <style jsx global>{`
            body {
              margin: 0;
              background:#F5F5F4;
            }
      `}</style>
<Head>
        <title>Tələbə360°</title>
        <link rel="icon" href="/home/360minilogo.svg" />
      </Head>
     <div><ToggleMenu/></div>

     <div><Navbar/></div>
  
      
     
        <div className={css.main}>
            <h3>Settings</h3>
            <div className={css.desktop_main}>
              <ul className={css.settings_ul}>
                <li>My360ID</li>
                <li>Security</li>
                <li>Membership</li>
                <li>Notifications</li>
                <li>References</li>
              </ul>
            </div>
           
     </div>
     </div>
            
     

     </>
    )
}