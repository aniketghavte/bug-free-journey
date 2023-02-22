import React, { useState , useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [Name, setName] = useState("");
  const [Department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [option,setOption] = useState()
  const [submitClick, setSubmitClick] = useState(false)


  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const CreateUser = async () => {

    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyehsmmRy-kceWsemHunOO43hADGha2zPxSNMv4hT4RSWCGSZqlxCxCGWBybwVLalpU/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', async e => {
      e.preventDefault()
      setIsLoading(true);
      await fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response =>{
          console.log(response)
          setIsRegister(true);
          setIsLoading(false)
        })
        .catch(error => {
          console.log(error)
          setIsLoading(false)
        })
    })

  }


  



 
  const handleSubmit = (event) => {
  event.preventDefault();
  setSubmitClick(true)
  CreateUser()
  // if (firstName === "") {
  //     toast.error("Enter first Name");
  // } else if (lastName === "") {
  //     toast.error("Enter Last Name")
  // } else if(phone > 10000000000 || phone < 999999999) {
  //     toast.error("Enter Valid Mobile no")
  // }else if(email === ""){
  //     toast.error("Enter email")
  // }else{
  //     Data.firstName = firstName;
  //     Data.lastName = lastName;
  //     Data.email = email;
  //     Data.phone = Number(phone) ;
  
  //     CreateUser()
  // }
  // useEffect(() => {
  //   CreateUser()
  // }, [submitClick])

  }
  return (
    <>
      <Head>
        <title>DPUs Got Talent Registration Form</title>
        <meta name="description" content="DPUs Got Talent Registration Form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </Head>
      <main className={styles.main}>


      <div className={styles.center}>
          <div>
          <Image
                  src="/logo.png"
                  alt="Vercel Logo"
                  width={370}
                  height={200}
                  priority
                />
            <p style={{fontSize: '1.5rem'}}>Department of Information Technology</p>
            <p style={{fontSize: '2.5rem', marginTop: '2rem', fontWeight: '600'}}>ITSA</p>
            <p style={{fontSize: '1.5rem', marginTop: '1rem'}}>Presents</p>
            <div className={styles.thirteen} style={{marginTop: '2rem', marginLeft: '4rem'}}>
            <p style={{fontSize: '2rem', fontWeight: '600'}}>DPUs Got Talent</p>
             </div>
             {/* <Image
                src="/dancingguy.svg"
                alt="Vercel Logo"
                width={100}
                height={100}
                priority
             /> */}
             <div style={{marginTop: '3rem', fontSize: '1.3rem'}}>
                <p style={{marginTop: '0.5rem'}}>Experience </p>
                <p style={{marginTop: '0.5rem'}}>The</p>
                <p style={{marginTop: '0.5rem'}}>Amazing Creativity</p>
             </div>

          </div>
          
        </div>



        <div className={styles.app__form}>

          {isLoading ? <>

                <p style={{textAlign: 'center'}}>Submitting Your Interest</p>
          
          </> : <>
          
          {!isRegister ? <>
              <div>
                <div className='form__header' style={{display: 'flex' , flexDirection: 'column', textAlign: 'center'}}>
                    <p style={{color: '#ddab6c', fontSize: '2rem'}}>ITSA DPU</p>
                    <p className='form__name' style={{fontSize: '1.5rem',marginTop: '1rem'}}>Register Here !!!!</p> 
                    <p className='form__name' style={{fontSize: '1.5rem',marginTop: '0.5rem'}}>Fill the Details Below to Register for the Event</p> 
                </div>
                <div style={{ textAlign: 'center', marginTop: '5%'}}>
                <Image
                  src="/illustration2.png"
                  alt="Vercel Logo"
                  width={250}
                  height={200}
                  priority
                />
              </div>

                <form onSubmit={handleSubmit} name="submit-to-google-sheet" style={{marginTop: '4rem'}}>
                    <div className={styles.form__item} >            
                        <p style={{textAlign: 'left'}}>Name</p>
                        <input className={styles.form__input} type="text" value={Name} name="Name" onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className={styles.form__item}>            
                        <p  style={{textAlign: 'left'}}>Email</p>
                        <input className={styles.form__input} type="email" value={email} name="Email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={styles.form__item}>            
                        <p  style={{textAlign: 'left'}}>Phone</p>
                        <input className={styles.form__input} type="tel" value={phone} name="Phone" onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className={styles.form__item}>            
                        <p  style={{textAlign: 'left'}}>Department and Year</p>
                        <input className={styles.form__input} type="text" value={Department} name="Department" onChange={(e) => setDepartment(e.target.value)}/>
                    </div>
                    {/* <div className={styles.form__item}>            
                        <p  style={{textAlign: 'left'}}></p>
                        <label for="cars">Choose a car:</label>

                          <select name="cars" id="cars" onChange={handleChange}>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </select>
                    </div> */}
                    <div className={styles.form__item}>  
                    <div style={{textAlign: 'left'}}>
                      <p>Choose any one Category : </p>
                      <p style={{marginTop: '1rem'}}> 𝘿𝙖𝙣𝙘𝙞𝙣𝙜 (Gr/Solo)</p>
                      <p> 🎤𝙎𝙞𝙣𝙜𝙞𝙣𝙜 (Gr/Solo) </p>
                      <p> 🖊️𝙋𝙤𝙚𝙩𝙧𝙮</p>
                      <p> 🎨𝘿𝙧𝙖𝙬𝙞𝙣𝙜/𝙋𝙖𝙞𝙣𝙩𝙞𝙣𝙜</p>
                      <p> 🎨🎭𝘾𝙤𝙢𝙚𝙙𝙮 𝙎𝙝𝙤𝙬</p>
                      <p> 🎹 𝙄𝙣𝙨𝙩𝙧𝙪𝙢𝙚𝙣𝙩 𝙋𝙡𝙖𝙮</p>
                      <p> 🪂𝙁𝙖𝙨𝙝𝙞𝙤𝙣 𝙎𝙝𝙤𝙬</p>
                      <p>  🎬𝙎𝙠𝙞𝙩 </p>
                      </div>         
                      
                        <input className={styles.form__input} type="text" value={category} name="Category" onChange={(e) => setCategory(e.target.value)}/>
                    </div>

                    <div className={styles.form__submit}>
                        {/* <Image
                              src="/dancingguy.svg"
                              alt="Vercel Logo"
                              width={100}
                              height={100}
                              priority
                          /> */}
                        <input style={{fontSize: '1.4rem'}}  type="submit" value='Register'/>
                    </div>

                </form>
              </div>
          </> : <>
           <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div >
               <p style={{textAlign:'center'}}>We Got Your Response</p>
               <p style={{textAlign:'center'}}>Thanks For Registration  </p>
            </div>
            <div>
              <div style={{hight: '20rem', width: '30rem', textAlign: 'center', marginTop: '5%'}}>
                <Image
                  src="/illustration.png"
                  alt="Vercel Logo"
                  width={300}
                  height={250}
                  priority
                />
              </div>

            </div>
            <div style={{display: 'flex', alignItems:'center', marginTop: '5%'}}>
              <Image
                  src="/instagram_logo.png"
                  alt="Vercel Logo"
                  width={80}
                  height={80}
                  priority
                />
                <p style={{marginLeft: '1rem'}}><a href='https://www.instagram.com/itsa_dpu/?hl=en' target='_blank' rel="noreferrer"> Click here to Follow us on Instagarm</a></p>
            </div>
           </div>
          </>}
          
          </>}





          </div>

        {/* <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </>
  )
}
