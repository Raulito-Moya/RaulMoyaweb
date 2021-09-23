import '../styles/globals.css'
import Script from 'next/script'




function MyApp({ Component, pageProps }) {
 
  
  const code = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_ANALYTICS : process.env.NEXT_PUBLIC_ANALYTICS

  return ( 
   <>
  { process.env.NODE_ENV === 'production' && (
  
  
  <>
     <Script
     id="my-script"
     strategy='lazyOnload'
     src={`https://www.googletagmanager.com/gtag/js?id=${code}`}
    />
    <Script
     id="my-script2"
     strategy='lazyOnload' >
      {
        `
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

       gtag('config','${code}');
       ` 
      }
    
      
     </Script>
   </>
  )}
 
   
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
