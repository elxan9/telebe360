import css from './navbar.module.css'
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image';
import ProfileDropdown from '../profile_dropdown/dropdown'
export default function Navbar (){
    return(
        <nav className={css.navbar}>
           <Image
         src={'/home/bookmark.svg'}
         width={0}
         height={0}
         className={css.bookmarkmob}
      />
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
         src={'tiicket.svg'}
         width={0}
         height={0}
         className={css.tikimob}
      />
      <Image
         src={'/home/Notifications.svg'}
         width={0}
         height={0}
         className={css.noti}
      />
      
    
     <div className={css.profmob}>  <Image
           src={'/murad.svg'}
           width={0}
           height={0}
           className={css.murad}

      />  <ProfileDropdown /></div>
       
        </nav>
    )
}