import Link from 'next/link'
// @ts-ignore
import './contact.scss'
/* import Image from 'next/image' */
import { Metadata } from 'next'
import ContactForm from '../components/ContactForm'

export const metadata: Metadata = {
  title: "Fluidsep - Contact"
}
export default function Contact() {

  return (
    <div className='contact'>
      <div className='wrap'>
        <div className='hero'>
          <h1>Contact us</h1>
        </div>
      </div>
      <main>
        <div className='contact-content'>
          <div className='contact-details'>
            <p className='details'>Email: <Link href="mailto:info@fluidsep.com">info@fluidsep.com</Link><br />
              Mobile: +47 930 28 690</p>
          </div>
          {/* <div className='contact-form'>
            <h2>Send us a message</h2>
            <div>
              <ContactForm />
            </div>
          </div> */}
        </div>
        <div className='location'>
          <p>Find our office:</p>
          <div>
            <a href="https://goo.gl/maps/RthYAzmyX252">Kronprins Olavs Alle 22, 7030 Trondheim</a>
          </div>
          <div className="map1">
            <img src='/images/fluidsep_map.png' width={350} height={350} alt='map' />
          </div>
        </div>
      </main>
    </div>
  )
}
