import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import { LoaderSpinner } from '../components/LoaderSpinner'
import { useForm } from '../hooks/useForm'
import { Footer } from '../components/Footer' 



export default function Home() {
   
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false) 
   


 const [formValues, handleInputChange] = useForm()
 

  const handleSubmit = async(e) => {
    e.preventDefault()
  
    let data = {
      name,
      email,
      message
    } 
  
    let badError = '' //this is for validate the form because here the state of error not change in the function
    let regexpname = new RegExp(/^[a-z ,.'-]+$/i) 
    let regexpemail = new RegExp(/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/)
    if(!regexpname.test(name) ){
       setError('Please the name if necesary') 
        badError = 'Please the name if necesary'
      } 
    else if(!regexpemail.test(email)){
       setError('please the email is incorrect') 
       badError = 'please the email is incorrect'}  
    else if(message.length <= 10){
      setError('plece write a correct message') 
      badError = 'plece write a correct message'
    } 
   
    

    if(badError.length === 0 ){
      setLoading(true)
      //console.log('Sending')
  
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
       // console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setLoading(false)
          setName('')
          setEmail('')
          setMessage('')
          setError('')
  
          setTimeout(()=>{
            setSubmitted(false)
          },[4000])
        }else{
       
           console.log(res.json());
          console.log('bad response');
        }
      })
     }else{
       
       console.log('Server Error 500');
     }

}


  return (
    <>
      <Head>
        <title>Raul Moya Web</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Raul_logo2.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@700&display=swap" rel="stylesheet"></link>

      </Head>
      <Script id="font" src="https://kit.fontawesome.com/ba4de37315.js" crossOrigin="anonymous"> </Script>
        
    <div className="container">
    
      <Section1/>
      <Section2/>
      <Section3/>
       <Footer/>
     
     
      </div>
      <div id="modal-root"> </div>
    </>
  )
}
