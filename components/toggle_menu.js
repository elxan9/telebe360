import { useState } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FaBars} from 'react-icons/fa';
import Link from  'next/link';

import css from './navbar.module.css'
const ToggleMenu = () => {
  const [isFirstListOpen, setIsFirstListOpen] = useState(true);
  const [isSecondListOpen, setIsSecondListOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleLists = () => {
    setIsFirstListOpen(!isFirstListOpen);
    setIsSecondListOpen(!isSecondListOpen);
  };
  const toggleBoth = () => {
    toggleMenu();
    toggleLists();
  };

  return (
    <div className={css.togglediv}>
      <div>
      {isFirstListOpen && (
        <ul className={css.first_ul}>
       <Link href='/home'>   <li ><Image
         src={'/home/360minilogo.svg'}
         width={0}
         height={0}
         className={css.img360}
      /></li></Link>
   
         <Link className={css.links} href='/'>  <li className={css.li}><Image
         src={'/home/crown.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li></Link>
      <Link className={css.links} href='/offers'><li className={css.li}><Image
         src={'/home/offers.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li></Link>
        <Link href='/categories/fashion'>  <li className={css.li}><Image
         src={'/home/Fashion.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li></Link>
       <Link href='/categories/food'>
       <li className={css.li}><Image
         src={'/home/Food.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li></Link>
       <Link href='/categories/technology'>
       <li className={css.li}><Image
         src={'/home/Technology.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li> </Link>
       <Link href='/categories/fashion'>
       <li className={css.li}><Image
         src={'/home/Travel.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li> </Link>
       <Link href='/categories/fitness'>
       <li className={css.li}><Image
         src={'/home/Fitness.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li> </Link>
       <Link href='/categories/entertainment'>
       <li className={css.li}><Image
         src={'/home/Entertainment.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li></Link>
       <Link href='/categories/job&trainee'>
       <li className={css.li}><Image
         src={'/home/Job&Trainee.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li></Link>
       <Link href='/categories/news'>
       <li className={css.li}><Image
         src={'/home/News.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li></Link>
        </ul>
      )}
      {isSecondListOpen && (
        <ul className={css.list2}>
          <Link href='/home'><li><Image
         src={'/before_login_media/telebe360logo.svg'}
         width={0}
         height={0}
         className={css.big360img}
      />
    
      </li></Link>
      <li className={css.li2}  style={{display:'flex',alignItems:'center',fontFamily:'DM Sans, sans-serif'}}><Image
         src={'/home/crown.svg'}
         width={0}
         height={0}
         className={css.list2offer}
      />
      <p className={css.plus360text}>Tələbə360+</p>
      </li>
        <li className={css.li2}  style={{display:'flex',alignItems:'center',fontFamily:'DM Sans, sans-serif'}}><Image
         src={'/home/offers.svg'}
         width={0}
         height={0}
         className={css.list2offer}
      />
      <p className={css.alloffers}>  All offers</p>
      </li>
      <Link className={css.links} href='/categories/fashion'><li className={css.li2}  style={{display:'flex',alignItems:'center',fontFamily:'DM Sans, sans-serif'}}><Image
         src={'/home/Fashion.svg'}
         width={0}
         height={0}
         className={css.list2offer}
      />
      <p className={css.alloffers}>Fashion</p>
      </li></Link>
      <li className={css.li2}  style={{display:'flex',alignItems:'center',fontFamily:'DM Sans, sans-serif'}}><Image
         src={'/home/Food.svg'}
         width={0}
         height={0}
         className={css.list2offer}
      />
      <p className={css.alloffers}>Food</p>
      </li>
      <li className={css.li2}  style={{display:'flex',alignItems:'center',fontFamily:'DM Sans, sans-serif'}}><Image
         src={'/home/Technology.svg'}
         width={0}
         height={0}
         className={css.list2offer}
      />
      <p className={css.alloffers}>  Technology</p>
      </li>
      <li className={css.li2}  style={{display:'flex',alignItems:'center',fontFamily:'DM Sans, sans-serif'}}><Image
         src={'/home/Travel.svg'}
         width={0}
         height={0}
         className={css.list2offer}
      />
      <p className={css.alloffers}>Travel</p>
      </li>
      <li className={css.li2}  style={{display:'flex',alignItems:'center',fontFamily:'DM Sans, sans-serif'}}><Image
         src={'/home/Fitness.svg'}
         width={0}
         height={0}
         className={css.list2offer}
      />
      <p className={css.alloffers}>Fitness</p>
      </li>
      <li className={css.li2}  style={{display:'flex',alignItems:'center',fontFamily:'DM Sans, sans-serif'}}><Image
         src={'/home/Entertainment.svg'}
         width={0}
         height={0}
         className={css.list2offer}
      />
      <p className={css.alloffers}>Entertainment </p>
      </li>
      <li  className={css.li2}  style={{display:'flex',alignItems:'center',fontFamily:'DM Sans, sans-serif'}}><Image
         src={'/home/Job&Trainee.svg'}
         width={0}
         height={0}
         className={css.list2offer}
      />
      <p className={css.alloffers}>Job&Trainee</p>
      </li>
      <li className={css.li2} style={{display:'flex',alignItems:'center',fontFamily:'DM Sans, sans-serif'}}><Image
         src={'/home/News.svg'}
         width={0}
         height={0}
         className={css.list2offer}
      />
      <p className={css.alloffers}>News</p>
      </li>
        </ul>
      )}</div>
     <span className={css.btnspan}>
     <button onClick={toggleBoth} className={css.toggle_but}>
     <FontAwesomeIcon  className={css.chevron} icon={isMenuOpen ? faChevronLeft : faChevronRight} /> <Image src={'/Burger.svg'} width={1} height={1} className={css.hamburger}/>
      </button>
   </span>
    </div>
  );
};

export default ToggleMenu;
