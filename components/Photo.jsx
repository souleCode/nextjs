"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return (
    <div className="h-full w-full relative">
       
            
                <div className="h-[298px] w-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
                    <Image src="/assets/images/imge2.png" 
                        priority 
                        quality={100} 
                        fill alt="" 
                        className="object-contain" />
                </div>
          
      {/* cercle pour le samedi 21/09*/}
    </div>
  )
}

export default Photo