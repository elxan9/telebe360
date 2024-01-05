import React from 'react';
import css from './home.module.css'; 
import ToggleMenu from '../../components/toggle_menu'
import { useState } from 'react';
import Image from 'next/image'
import Head from 'next/head';
import Navbar from '../../components/navbar'
import Link from 'next/link';
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

     
     </div>
     <div><Link href='/kfc'><Image src={'/home/CardKfc.svg'} width={0} height={0} className={css.card}/></Link></div>
     <Image src={'/home/Footer.svg'}
     width={0}
     height={0}
     className={css.footer}
     />

     </>
    )
}