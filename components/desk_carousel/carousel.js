<<<<<<< HEAD
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel';
import { FaChevronRight,FaChevronLeft } from 'react-icons/fa';
import css from './carousel.module.css'
import { useState } from 'react';
import Image from 'next/image';
export default function Slider(){
    
    return(

<Carousel 
         renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} style={{position:'absolute',top:'9vw',left:'4vw',zIndex:'1',background:'#ffffff2a',border:'none',borderRadius:'50vw' ,width:'2.5vw',display:'flex',justifyContent:'center',alignItems:'center',height:'2.5vw',color:'white',fontSize:'1.5vw',}}>
                    <FaChevronLeft/>
                </button>
            )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
                <button type="button" onClick={onClickHandler} title={label} style={{position:'absolute',top:'9vw',right:'3vw',zIndex:'1',background:'#ffffff2a',border:'none',borderRadius:'50vw' ,width:'2.5vw',display:'flex',justifyContent:'center',alignItems:'center',height:'2.5vw',color:'white',fontSize:'1.5vw'}}>
                <FaChevronRight/>
                </button>
            )
        }
useKeyboardArrows={true}
swipeable={true}

showStatus={false}
showThumbs={false}
autoPlay={true}
infiniteLoop={true}

showArrows={true}
emulateTouch={true}
swipeScrollTolerance={5}
thumbWidth={0}
interval={5000}
transitionTime={1500}
showIndicators={false}
centerMode={true}
centerSlidePercentage={100}
selectedItem={0}
stopOnHover={false}
dynamicHeight={true}
className={css.carousel}


>

 <div>
 <Image
         src={'/deskadd1.svg'}
         width={0}
         height={0}
         className={css.deskcar}
      />
 </div>
 <div>
 <Image
         src={'/deskadd1.svg'}
         width={0}
         height={0}
         className={css.deskcar}
      />
 </div>
 <div>
 <Image
         src={'/deskadd1.svg'}
         width={0}
         height={0}
         className={css.deskcar}
      />
 </div>
    </Carousel>
    
=======
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel';
import { FaChevronRight,FaChevronLeft } from 'react-icons/fa';
import css from './carousel.module.css'
import { useState } from 'react';
import Image from 'next/image';
export default function Slider(){
    
    return(

<Carousel 
         renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} style={{position:'absolute',top:'9vw',left:'4vw',zIndex:'1',background:'#ffffff2a',border:'none',borderRadius:'50vw' ,width:'2.5vw',display:'flex',justifyContent:'center',alignItems:'center',height:'2.5vw',color:'white',fontSize:'1.5vw',}}>
                    <FaChevronLeft/>
                </button>
            )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
                <button type="button" onClick={onClickHandler} title={label} style={{position:'absolute',top:'9vw',right:'3vw',zIndex:'1',background:'#ffffff2a',border:'none',borderRadius:'50vw' ,width:'2.5vw',display:'flex',justifyContent:'center',alignItems:'center',height:'2.5vw',color:'white',fontSize:'1.5vw'}}>
                <FaChevronRight/>
                </button>
            )
        }
useKeyboardArrows={true}
swipeable={true}

showStatus={false}
showThumbs={false}
autoPlay={true}
infiniteLoop={true}

showArrows={true}
emulateTouch={true}
swipeScrollTolerance={5}
thumbWidth={0}
interval={5000}
transitionTime={1500}
showIndicators={false}
centerMode={true}
centerSlidePercentage={100}
selectedItem={0}
stopOnHover={false}
dynamicHeight={true}
className={css.carousel}


>

 <div>
 <Image
         src={'/deskadd1.svg'}
         width={0}
         height={0}
         className={css.deskcar}
      />
 </div>
 <div>
 <Image
         src={'/deskadd1.svg'}
         width={0}
         height={0}
         className={css.deskcar}
      />
 </div>
 <div>
 <Image
         src={'/deskadd1.svg'}
         width={0}
         height={0}
         className={css.deskcar}
      />
 </div>
    </Carousel>
    
>>>>>>> 8dea0767808658bb174f0393e0530f44b370abf6
    )}