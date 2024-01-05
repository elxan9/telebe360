import { useState } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FaBars} from 'react-icons/fa';

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
          <li><Image
         src={'/home/360minilogo.svg'}
         width={0}
         height={0}
         className={css.img360}
      /></li>
      <li><Image
         src={'/home/offers.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li>
          <li><Image
         src={'/home/crown.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li>
          <li><Image
         src={'/home/Fashion.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li>
       <li><Image
         src={'/home/Food.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li>
       <li><Image
         src={'/home/Technology.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li>
       <li><Image
         src={'/home/Travel.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li>
       <li><Image
         src={'/home/Fitness.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li>
       <li><Image
         src={'/home/Entertainment.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li>
       <li><Image
         src={'/home/Job&Trainee.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li>
       <li><Image
         src={'/home/News.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      /></li>
        </ul>
      )}
      {isSecondListOpen && (
        <ul className={css.list2}>
          <li><Image
         src={'/before_login_media/telebe360logo.svg'}
         width={0}
         height={0}
         className={css.big360img}
      />
    
      </li>
            <li><Image
         src={'/home/bigcrown.svg'}
         width={0}
         height={0}
         className={css.list2img}
      /></li>
        <li style={{display:'flex',alignItems:'center',fontFamily:'DM Sans, sans-serif'}}><Image
         src={'/home/offers.svg'}
         width={0}
         height={0}
         className={css.list2offer}
      />
      <p className={css.alloffers}>  All offers</p>
      </li>
         <li><Image
         src={'/home/bigfashion.svg'}
         width={0}
         height={0}
         className={css.list2img}
      /></li>
         <li><Image
         src={'/home/bigfood.svg'}
         width={0}
         height={0}
         className={css.list2img}
      /></li>
         <li><Image
         src={'/home/bigtechno.svg'}
         width={0}
         height={0}
         className={css.list2img}
      /></li>
         <li><Image
         src={'/home/bigtravel.svg'}
         width={0}
         height={0}
         className={css.list2img}
      /></li>
         <li><Image
         src={'/home/bigfitness.svg'}
         width={0}
         height={0}
         className={css.list2img}
      /></li>
         <li><Image
         src={'/home/bigentertainment.svg'}
         width={0}
         height={0}
         className={css.list2img}
      /></li>
         <li><Image
         src={'/home/bigjob.svg'}
         width={0}
         height={0}
         className={css.list2img}
      /></li>
         <li><Image
         src={'/home/bignews.svg'}
         width={0}
         height={0}
         className={css.list2img}
      /></li>
        </ul>
      )}</div>
     <span className={css.btnspan}>
     <button onClick={toggleBoth} className={css.toggle_but}>
     <FontAwesomeIcon  className={css.chevron} icon={isMenuOpen ? faChevronLeft : faChevronRight} /> <FaBars className={css.hamburger}/>
      </button>
   </span>
    </div>
  );
};

export default ToggleMenu;
