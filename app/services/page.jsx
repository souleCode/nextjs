"use client";
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';
import {BsArrowReturnRight, BsArrowDownRight } from "react-icons/bs";


const services=[
  {
    num:'01',
    title:"Développement web full stack",
    description:"Nous offrons des formations en développement web avec les technologies d'actualité. Nous vous accompagnons dans la digitalisation de votre activité en vous créant des sites webs dynamiques ",
    href:"/#",
  },
  {
    num:'02',
    title:"Développement Mobile",
    description:"Nous pouvons egalement vous offrir des Applications web très appliquée à l'expérience utilistaeur",
    href:"",
  },
  {
    num:'03',
    title:"IA/DataScience/ML",
    description:"Nous vous offrons egalement des formations en IA et DataScience. Nous vous accompagnons dans la creation des solutions IA pour votre boîte",
    href:"/#",
  },
  {
    num:'04',
    title:"Développement Desktop",
    description:"Nous vous aidons a creer des applications Desktop pour la gestion des travaux, des applications de calcul Mecanique",
    href:"/#",
  },

]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 '>
      <div className="container mx-auto">
        <motion.div
          initial={{ 
            opacity:0
           }}
          animate={{ 
            opacity:1,
            transition:{
              delay:2.4,
              duration:0.4,
              ease: 'easeIn'
            }
           }}
           className='grid grid-cols-1 md:grid-cols-2 gap-[60px] '
        >
          {services.map((item,index)=>{
            return <div key={index} className='flex flex-1 flex-col justify-center gap-6 group'>
              {/* top*/ }
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-500'>{item.num}</div>
                <Link href={item.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 ' >
                <BsArrowReturnRight />
                </Link>
              </div>
              {/* title*/ }
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 '>{item.title} </h2>
              {/* description*/ }
              <p className='text-white/60'>{item.description} </p>
              <div className='border-b border-white/20 w-full'></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services