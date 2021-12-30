import healtyhabits1 from '../public/proyects_images/helty_habits1.png'
import healtyhabits2 from '../public/proyects_images/healty_habits2.png'
import healtyhabits3 from '../public/proyects_images/healty_habits3.png'

import Calendarapp1 from '../public/proyects_images/calendar_app1.png'
import Calendarapp2 from '../public/proyects_images/calendar_app2.png'
import calendarapp3 from '../public/proyects_images/calendar_app3.png'

import spotifysearch1 from '../public/proyects_images/spotify1.png'
import spotifysearch2 from '../public/proyects_images/spotify2.png'
import spotifysearch3 from '../public/proyects_images/spotify3.png'

import journal1 from '../public/proyects_images/journal-app1.png'
import journal2 from '../public/proyects_images/journal-app2.png'
import journal3 from '../public/proyects_images/journal-app3.png'

import gifts1 from '../public/proyects_images/gifts1.jpg'
import gifts2 from '../public/proyects_images/gifts2.png'
import gifts3 from '../public/proyects_images/gifts3.png'





 const reactProjects = [ 
  {
      title:"Healty Habits",
      images:[healtyhabits1,healtyhabits2,healtyhabits3 ],
      description:"This a community blog about nutrition habits, where you can become a member and upload your articles and posts on specific topics of healthy habits",
      technologies:["HTML5","CSS (Styled Components)","ReactJS","NodeJS","ExpressJS","MongoDB"],
      link:"https://healty-habits.herokuapp.com/",
      github:"https://github.com/Raulito-Moya/Healty-habits"
  },
 
 {
     title:"Calendar App",
     images:[Calendarapp1,Calendarapp2,calendarapp3],
     description:"A Calendar Application in where you can register events in a specific date",
     technologies:["HTML5","CSS","ReactJS","NodeJS( MomentJS )","ExpressJS","MongoDB"],
     link:"https://mearn-calendar-raul.herokuapp.com/ ",
     github:" https://github.com/Raulito-Moya/Calendar-Events-App"
 },
 {
    title:"SpotifySearch",
    images:[spotifysearch1,spotifysearch2,spotifysearch3],
    description:"A Simple Web aplication you can manage the spotify api for search for artist and get the album music and singles music by artist ",
    technologies:["HTML5","CSS","ReactJS","NodeJS","ExpressJS"],
    link:"https://spotify-searching.herokuapp.com/  ",
    github:"https://github.com/Raulito-Moya/ApiSpotify-server"
  },
  {
      title:"Journal App",
      images:[journal1,journal2,journal3],
      description:"In this Journal App you can save notes and any writing you like. I think it would be a good daily for you",
      technologies:["HTML5","CSS","ReactJS","Firebase","Cloudinary"],
      link:"https://react-app-cursos-f534a.web.app/",
      github:"https://github.com/Raulito-Moya/Journal-Notes-App"
  },
  {
    title:"Gift App",
    images:[gifts1,gifts2,gifts3],
    description:"If you like animated stickers I think this app will be for you, this app use a Giphy API endpoint where you can find any sticker that you want",
    technologies:["HTML5","SASS","ReactJS"],
    link:"https://giftapp-c3003.firebaseapp.com/",
    github:"https://github.com/Raulito-Moya/react-gifexpertapp"
  },
   {
    title:"Uber-Clone",
    images:[
         "https://res.cloudinary.com/dx33ki9ul/image/upload/v1637292833/uber-clone1_ou7rcl.png",
         "https://res.cloudinary.com/dx33ki9ul/image/upload/v1637293605/uber-clone3_olwk5t.png",
         "https://res.cloudinary.com/dx33ki9ul/image/upload/v1637293593/uber-clone2_d9ijca.png"
        ],
    description:"This app is a clone of the famous Uber app. I created this app with Next.js and mapbox API for get the maps. ",
    technologies:["HTML5","TailwindCSS","NextJS","Firebase"],
    link:"https://uber-clone-silk.vercel.app",
    github:"https://github.com/Raulito-Moya/Uber-Clone"
  }


]


const angularProjects = [ 
 
 {
    title:"Hero App",
    images:[
           "https://res.cloudinary.com/dx33ki9ul/image/upload/v1640040794/Screenshot_10_q8i9l4.png",
            "https://res.cloudinary.com/dx33ki9ul/image/upload/v1640040828/Screenshot_8_hv6hda.png",
            "https://res.cloudinary.com/dx33ki9ul/image/upload/v1640040814/Screenshot_9_ycxema.png" 
         ],
    description:"A super hero built app with Angular and Angular Material, if uou like comics and superheros this is an app for you",
    technologies:["Anuglar","Angular Material"],
    link:"",
    github:"https://github.com/Raulito-Moya/Heros-App-Angular"
  }

]





export const mockData = {
  reactProjects,
  angularProjects

}
