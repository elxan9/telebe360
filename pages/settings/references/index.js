import React from 'react';
import css from './css.module.css';
import ToggleMenu from '../../../components/navbar&toggle/toggle_menu'
import { useState } from 'react';
import Image from 'next/image'
import Head from 'next/head';
import Navbar from '../../../components/navbar&toggle/profile_nav&toggle/pnavbar'
import Link from 'next/link';
import Dropdown from '../../../components/profile_dropdown/dropdown'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
export default function Home() {
  return (
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
        <div className={css.toggle}><ToggleMenu /></div>

        <div><Navbar /></div>



        <div className={css.main}>
         <div className={css.main_title}>  <h3>Settings</h3> 
       <Link href='/home'>  <Image
                      src={'/X.svg'}
                      width={0}
                      height={0}
                      className={css.X}
                    /></Link>
         </div>
         <div className={css.mobile_title}>
         <Link href='/settings'> 
           <Image
                      src={'/chevron-left.svg'}
                      width={0}
                      height={0}
                      className={css.chevron_left}
                    /></Link>
                    <h3>Membership</h3>
         </div>
          <div className={css.desktop_main}>
            <ul className={css.settings_ul}>
            <Link className={css.ul} href='/settings/my360id'><li >My360ID</li></Link>
             <Link  className={css.ul} href='/settings/security'> <li>Security</li></Link>
              <Link className={css.ul}  href='/settings/membership'><li >Membership</li></Link>
              <Link className={css.ul} href='/settings/notifications'><li >Notifications</li></Link>
              <Link className={css.ul_360id} href='/settings/references'><li >References</li></Link>
            </ul>
           
           <h3> Yaxın zamanda gələcək</h3>
          </div>
               < Dropdown className={css.dropdown}/>
        </div>
      </div>



    </>
  )
}