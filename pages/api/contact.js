

 const path = require('path');
let nodemailer = require('nodemailer')
const { google } = require('googleapis')


export default async function (req,res){
  const {name,email} = req.body

  const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
  oauth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

  const accesstoken = await oauth2Client.getAccessToken()

 // console.log(accesstoken);
   try {
    
  
 //   console.log(accesstoken);
    const transporter = nodemailer.createTransport({

      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'raulmoyaweb@gmail.com',
        clientId: "841260571625-iejpff1538tghqbuok1d7mo7o44nsmc9.apps.googleusercontent.com",
        clientSecret: "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",
        refreshToken: '1//049vCAkcr5f7wCgYIARAAGAQSNwF-L9IrsZ12Iu65R86YOJJyuvzZzW7Nh3lL9PT_I8AQN7S1VvHV_kseeqDeWr2NwGtTkurpuzA',
        accessToken: accesstoken.res.data.access_token

      }
    })

    const mailData = {
      from: 'raulmoyaweb@gmail.com',
      to: `rauly7moya@gmail.com`,
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    
    
  

    await new Promise((resolve,reject) => {   

      transporter.sendMail(mailData, function (err, info) {
          if(err){
                 console.log(err)
               reject(err)
          }
          else{
             console.log(info)
              resolve(info)
          }
            
        })

 })  
  

   const callbackmailData = {
    from: 'raulmoyaweb@gmail.com',
    to: `${email}`,
    subject: `Message From raulmoyaweb@gmail.com`,
    text: req.body.message + " | Sent from: " + req.body.email,
    attachments: [{
        filename: 'Raul_logo2.png',
        path: 'https://res.cloudinary.com/dx33ki9ul/image/upload/v1631135752/Raul_logo2_uej8pg.png',
        cid: 'logo' //same cid value as in the html img src
    }],
    html: `<div> 
          <img  src="cid:logo"   alt="RauL Moya Logo"/>
          <h2 style="text-align: center;color: #5f6368;"> Hi my friend thanks for contact me I will send you a messege and I will contact you inmediatly</h2> 
     </div>
     <p>Raul Moya</p>
    <p>Sent from: raulmoyaweb@gmail.com</p>`,
  
  }
  


 await  new Promise((resolve,reject)=> {

  transporter.sendMail(callbackmailData, function (err, info) {
         if(err){
           console.log(err)
         reject(err)
         }
         else{
          // console.log(info)
           resolve(info)
         }
           
       })

})  
    // const info =   await transporter.sendMail(mailData) 
    // const callbackinfo =   await transporter.sendMail(callbackmailData)      
     
 
     res.status(200).json({msg:'sended correctly'})

   } catch (error) {
     console.log(error);
    res.status(400).json({msg:'sended bad'})
     return error
   }

  }

 /* sendMail.then(res => console.log('email is sent',res))
    .catch(err => console.log('error',err))*/









  /*  export default async function (req, res) {
     
    try {
        
  
        const {name,email} = req.body
        console.log(req.body);
       


       const transporter = await  nodemailer.createTransport({
         port: 465,
         host: "smtp.gmail.com",
         auth: {
           user: 'raulmoyaweb@gmail.com',
           pass: process.env.EMAIL_PASSWORD,
         },
         secure: true,
       })

       const mailData = {
         from: 'raulmoyaweb@gmail.com',
         to: `rauly7moya@gmail.com`,
         subject: `Message From ${req.body.name}`,
         text: req.body.message + " | Sent from: " + req.body.email,
         html: `<div>${req.body.message}</div><p>Sent from:
         ${req.body.email}</p>`
       }

    
    

      
    
       
       await new Promise((resolve,reject) => {   

            transporter.sendMail(mailData, function (err, info) {
                if(err){
                       console.log(err)
                     reject(err)
                }
                else{
                   console.log(info)
                    resolve(info)
                }
                  
              })

       })    
       

       const callbackmailData = {
        from: 'raulmoyaweb@gmail.com',
        to: `${email}`,
        subject: `Message From raulmoyaweb@gmail.com`,
        text: req.body.message + " | Sent from: " + req.body.email,
        attachments: [{
            filename: 'Raul_logo2.png',
            path: 'https://res.cloudinary.com/dx33ki9ul/image/upload/v1631135752/Raul_logo2_uej8pg.png',
            cid: 'logo' //same cid value as in the html img src
        }],
        html: `<div> 
              <img  src="cid:logo"   alt="RauL Moya Logo"/>
              <h2 style="text-align: center;color: #5f6368;"> Hi my friend thanks for contact me I will send you a messege and I will contact you inmediatly</h2> 
         </div>
         <p>Raul Moya</p>
        <p>Sent from: raulmoyaweb@gmail.com</p>`,
      
      }

    await  new Promise((resolve,reject)=> {

           transporter.sendMail(callbackmailData, function (err, info) {
                  if(err){
                    console.log(err)
                  reject(err)
                  }
                  else{
                   // console.log(info)
                    resolve(info)
                  }
                    
                })

         })   
           
        
              res.status(200).json({msg:'sended correctly'}) 
          

   } catch (error) {
        console.log(error);
        res.status(400).json({error:error})
    }
    
       
 }  */