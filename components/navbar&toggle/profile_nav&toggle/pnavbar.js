import css from './pnavbar.module.css'
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link'
export default function Navbar (){
    return(
        <nav className={css.navbar}>
           
            <form onSubmit className={css.form}>
      <input className={css.search}
        type="text"
        placeholder=""
      
      />
 
      <button type="submit" className={css.search_but}> <BiSearch className={css.search_icon}/></button>
    </form>
  
<button className={css.feedback}>Feedback</button>
<button className={css.favourites}> <Image
         src={'/home/bookmark.svg'}
         width={0}
         height={0}
         className={css.bookmarkimg}
      />Favourites</button>
<Image
         src={'/home/Tickets.svg'}
         width={0}
         height={0}
         className={css.tiki}
      />
     
      <Image
         src={'/home/Notifications.svg'}
         width={0}
         height={0}
         className={css.noti}
      />
      <Image src={'/home/profile.svg'}
        width={0}
        height={0}
        className={css.prof}
      />
        <Image src={'pp.svg'}
        width={0}
        height={0}
        className={css.profmob}
      />
      <Link href='/home'> <Image src={'X.svg'}
        width={0}
        height={0}
        className={css.X}
      /></Link>
       
        </nav>
    )
}