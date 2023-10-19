import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import {MdMessage} from 'react-icons/md'
import {IoIosCall} from 'react-icons/Io'

const ContactForm = () => {
  return (
    <section className={`${styles.container}`}>
        <div className={styles.contactfrom}>
            <div className={styles.topbtn}>

            <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='25px' />}/>
            <Button text='VIA CALL' icon={<IoIosCall fontSize='25px' />}/>
            </div>
            <Button 
            isOutline={true}
            text='VIA EMAIL FORM' icon={<IoIosCall fontSize='25px' />}/>

            <form action="" className={`${styles.abc}`}>
                <fieldset className={`${styles.name1}`}>

             <legend className={styles.mg}>Name</legend>
              {/* <input type="text" name='name' /> */}
                </fieldset>
                <fieldset className={`${styles.e_mail}`}>

             <legend className={styles.mg}>E-mail</legend>
              {/* <input type="text" name='name' /> */}
                </fieldset>
                <fieldset className={`${styles.text}`}>

             <legend className={styles.mg}>Text</legend>
              {/* <input type="text" name='name' /> */}
                </fieldset>

            </form>
                <div style={{display:'flex',justifyContent:'end',
              marginRight:'19px'}} >
            <Button  text='Submit Button' />
                </div>
        </div>
        <div className={`${styles.contactimg}`}>
          <img className={`${styles.cimg}`} src="/images/frame.png" alt="" />
        </div>
      
    </section>
  )
}

export default ContactForm
