import React from 'react';
import css from './css.module.css'; 
import ToggleMenu from '../../components/navbar&toggle/profile_nav&toggle/ptoggle_menu'
import { useState } from 'react';
import Image from 'next/image'
import Head from 'next/head';
import Navbar from '../../components/navbar&toggle/profile_nav&toggle/pnavbar'
import Link from 'next/link';
import { FaChevronRight,FaChevronLeft } from 'react-icons/fa';
export default function Home (){
    return(
        <>
     <div className={css.body}>
         <style jsx global>{`
            body {
              margin: 0;
              background:#F2F3F2;
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
           
      <ul className={css.proful}>
      <div className={css.profdiv}>
            <Image src={'pp.svg'}
        width={0}
        height={0}
        className={css.profmob}
      />
         <div className={css.divtext}> 
            <h2>Həsənov Niyaz</h2>
            <p>Azerbaijan Technical University</p>
         </div> <Image src={'qr.svg'}
        width={0}
        height={0}
        className={css.qr}
      />
            </div>
           
        <li className={css.profli}>
        <Image src={'360idmob.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p>My 360ID</p>
      <FaChevronRight className={css.chevron}/>
        </li>
        <li className={css.profli}>
        <Image src={'security.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p>Security</p>
      <FaChevronRight className={css.chevron}/>
        </li>
        <li className={css.profli}>
        <Image src={'membermob.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p style={{color:'#FFB800'}}>Membership</p>
      <FaChevronRight style={{color:'#FFB800'}}className={css.chevron}/>
        </li>
        <li className={css.profli}>
        <Image src={'profnoti.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p>Notifications</p>
      <FaChevronRight className={css.chevron}/>
        </li>
        <li className={css.profli}>
        <Image src={'profreferences.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p>References</p>
      <FaChevronRight className={css.chevron}/>
        </li>   
        <li className={css.profli}>
        <Image src={'proffeedback.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p>Feedback</p>
      <FaChevronRight className={css.chevron}/>
        </li>   
      </ul>
      <ul className={css.proful2}>
      <li className={css.profli}>
        <Image src={'profsupport.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p style={{color:'#0057FF'}}>Technical Support</p>
      <FaChevronRight style={{color:"#0057FF"}}className={css.chevron}/>
        </li>  
        <li className={css.profli}>
        <Image src={'profrefere.svg'}
        width={0}
        height={0}
        className={css.id360mob}
      />
      <p style={{color:'#FF0000'}}>Refere a Friend</p>
      <FaChevronRight style={{color:"#FF0000"}}className={css.chevron}/>
        </li>  
      </ul>
        </div>
     
     </div>
            
     

     </>
    )
}