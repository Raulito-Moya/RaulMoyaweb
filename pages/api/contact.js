


require('dotenv').config()
 const path = require('path');
let nodemailer = require('nodemailer')


    export default async function (req, res) {
     
    try {
        

        const {name,email} = req.body
        console.log(req.body);
       


       const transporter = await  nodemailer.createTransport({
         port: 465,
         host: "smtp.gmail.com",
         auth: {
           user: 'raulmoyaweb@gmail.com',
           pass: 'RaulWeb1234',
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
                    console.log(info)
                    resolve(info)
                  }
                    
                })

         })   
           
        
              res.status(200).json({msg:'sended correctly'}) 
          

    } catch (error) {
        console.log(error);
        res.status(400).json({error:error})
    }
       
       
 }