import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from "react-redux";
import { iconAction } from "../store/icon-slice";
import sun24 from "../icons/sun-24.png";
import moon30 from "../icons/moon-30.png";
import Link from 'next/link'

export default function Home() {

  const dispatcher = useDispatch()

  let icon = useSelector(state => state.icon)
  console.log(icon)

  function changeIcon() {

    icon.icon === "moon" ? dispatcher(iconAction.iconSun()) : dispatcher(iconAction.iconMoon())

  }


  return (
    <div style={{ backgroundColor: icon.icon === "moon" ? "white" : "#000000b5" }} className={styles.container}>

      <main className={styles.main}>
        <div className='NavBar' > 
          <Link href="/career" sx={{textDecoration:'none' }} className='item'>Career
          </Link>
          <Link href="/about" sx={{textDecoration:'none' }} className='item'>About
          </Link>
        </div>

        <div onClick={changeIcon} className='iconBox'>
          <Image
            width={30}
            height={30}
            objectFit="cover"
            src={icon.icon === 'moon' ? moon30 : sun24}
            alt="image"
          />
        </div>
      </main>
    </div>
  )
}
