import '../styles/globals.css'
import Script from 'next/script'

// Global site tag (gtag.js) - Google Analytics 
//<script async src="https://www.googletagmanager.com/gtag/js?id=G-FK7XZ2NHH5"></script>
//<script>
//  window.dataLayer = window.dataLayer || [];
//  function gtag(){dataLayer.push(arguments);}
//  gtag('js', new Date());
//
//  gtag('config', 'G-FK7XZ2NHH5');
//</script>


function MyApp({ Component, pageProps }) {
   
  const code = process.env.ANALYTICS
  
  return ( 
   <>
  <Script
   id="my-script"
   strategy='lazyOnload'
   src={`https://www.googletagmanager.com/gtag/js?id=${code}`}
  />
  <Script
  id="my-script"
  strategy='lazyOnload' >
    {
      `
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());

     gtag('config', ${code});
     ` 
    }
 
    
  </Script>
   
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
