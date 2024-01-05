import css from './navbar.module.css'
import { BiSearch } from 'react-icons/bi';
import Image from 'next/image';

export default function Navbar (){
    return(
        <nav className={css.navbar}>
            
            <form onSubmit classNanme={css.form}>
      <input className={css.search}
        type="text"
        placeholder="Search"
      
      />
 
      <button type="submit" className={css.search_but}> <BiSearch className={css.search_icon}/></button>
    </form>
    <select className={css.language}>
    <option value="">En</option>
    <option value="hurr">Az</option>
    <option value="hurr">Tr</option>
</select>
<button className={css.feedback}>Feedback</button>
<button className={css.favourites}> <Image
         src={'/home/bookmark.svg'}
         width={50}
         height={50}
         className={css.bookmarkimg}
      />Favourites</button>
<Image
         src={'/home/Tickets.svg'}
         width={50}
         height={50}
         className={css.tiki}
      />
      <Image
         src={'/home/Notifications.svg'}
         width={50}
         height={50}
         className={css.noti}
      />
      <Image src={'/home/profile.svg'}
        width={0}
        height={0}
        className={css.prof}
      />
        </nav>
    )
}