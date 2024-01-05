import React from 'react';
import css from './login.module.css'; 
import { FaEye, FaEyeSlash, FaKey } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link';
export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderimi için burada yapılması gerekenler
    console.log(formData); // Örnek olarak formData'yı konsola yazdırma
  };

    return (
        <div className={css.body}>
              <style jsx global>{`
            body {
              margin: 0;
              
            }
      `}</style>
<Head>
        <title>Tələbə360°-a daxil olun</title>
        <link rel="icon" href="/home/360minilogo.svg" />
      </Head>
          <div className={css.logoDiv}>
          <Image
         src={'/before_login_media/telebe360logo.svg'}
         width={0}
         height={0}
         className={css.logoImg}
      />
          </div>
          


         <div className={css.loginForm}>
          <form onSubmit={handleSubmit} className={css.loginFormDiv}>
            <div style={{display:'flex',justifyContent:'center'}}><h2 className={css.daxiltxt}>Daxil olun</h2></div>
      <div>
        
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mailiniz"
          className={css.emailinput}
        />
      </div>
      <div >
         <FaKey className={css.keyicon}/>
        <input
          type={passwordVisible ? 'text' : 'password'}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Şifrəniz"
          className={css.pass}
        
        />
        <span  onClick={togglePasswordVisibility}>
          {passwordVisible ? <FaEyeSlash className={css.eye} /> : <FaEye className={css.eye}  />}
        </span>
      </div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'2vw'}}>
      <p   className={css.logintxt}><i>Şifrənizi unutmusunuz?</i></p>
      <Link href='/home'><button className={css.daxilol} type="submit">Daxil ol</button></Link></div>
      <div style={{display:'flex',alignItems:'center',marginTop:'10vw',marginLeft:'-8vw'}}>
      <p  className={css.logintxt}><i>Hesabınız yoxdur?</i></p>
     <Link href='/register'><button className={css.qeydiyyat} type="submit">Qeydiyyatdan keçin</button></Link></div>
      
    </form>

     </div>
  

        </div>
        );
    }