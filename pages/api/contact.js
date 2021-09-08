require('dotenv').config()



    export default async function (req, res) {
        const path = require('path');
        

       
          

        const {name,email} = req.body
         console.log(req.body);
        let nodemailer = require('nodemailer')
        const transporter =  nodemailer.createTransport({
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

      const pathImage = path.join(__dirname,'../../../../public/Raul_logo2.png')
    
     

        const callbackmailData = {
            from: 'raulmoyaweb@gmail.com',
            to: `${email}`,
            subject: `Message From raulmoyaweb@gmail.com`,
            text: req.body.message + " | Sent from: " + req.body.email,
            attachments: [{
                filename: 'Raul_logo2.png',
                path: pathImage,
                cid: 'logo' //same cid value as in the html img src
            }],
            html: `<div> 
                  <img  src="cid:logo"   alt="RauL Moya Logo"/>
                  <h2 style="text-align: center;color: #5f6368;"> Hi my friend thanks for contact me I will send you a messege and I will contact you inmediatly</h2> 
             </div>
             <p>Raul Moya</p>
            <p>Sent from: raulmoyaweb@gmail.com</p>`,
          
          }

        transporter.sendMail(mailData, function (err, info) {
          if(err)
            console.log(err)
          else
            console.log(info)
        })

        transporter.sendMail(callbackmailData, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info)
          })

        res.status(200).json({msg:'sended correctly'})
      }