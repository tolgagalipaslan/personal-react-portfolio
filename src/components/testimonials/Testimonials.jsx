import React from 'react'

import './testimonials.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Doğan Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
     
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Furkan Ateş",
      title: "Frontend Mentor",
      img:
        "assests/Chad.jpg",
     
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Utku Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((p)=>(


       
          <div className={p.featured ? 'card featured ' : 'card'}>
            <div className="top">
              <a href="#"><GitHubIcon/></a>
              <div className="imgBox">
              <img src={p.img}  className='user' alt="" />
              </div>
              <a href="#"><LinkedInIcon/></a>
            </div>
            <div className="center">
              {p.desc}
            </div>
            <div className="bottom">
              <h3>{p.name}</h3>
              <h4>{p.title}</h4>
            </div>
          </div>
           ))}
      </div>
    </div>
  )
}
