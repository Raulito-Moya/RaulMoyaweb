import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { LoaderSpinner } from '../components/LoaderSpinner'
import { useForm } from '../hooks/useForm'
import styles from '../styles/Home.module.css'

export const Footer = () => {
    
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
    <footer className={styles.bottom} id="contact-me">

    <h2>Contact Me:</h2>
    <p><strong>number: </strong>  (816) - 718 - 8927</p>
    <p><strong>email: </strong>  rauly7moya@gmail.com</p>

    <form   className={styles.form} autoComplete="off">
      <label htmlFor="name">Name:</label>
      <input autoComplete="off" type="input" name="name"  placeholder="Your name" value={name} className={styles.input} onChange={(e)=>{setName(e.target.value)}}  required/>
      <label htmlFor="emal">Email:</label>
      <input type="email" name="email" placeholder="Your email" value={email} className={styles.input}  onChange={(e)=>{setEmail(e.target.value)}} required/>
      <textarea rows="" cols="" placeholder="Type here" value={message} className={styles.textarea} onChange={(e)=>{setMessage(e.target.value)}} required></textarea>
      <button type="submit" disabled={loading} className={styles.sendbutton} onClick={(e)=>{handleSubmit(e)}}>Send</button>
      {loading && <LoaderSpinner data-testid="spinner" small/>}
      {submitted && <p>Your message was sended</p>}
      {error && <p>{error}</p>}
    </form>

  </footer>
  )
}
