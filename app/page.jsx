import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";


const Home = () => {
  return (
    <section className="h-full">
        <div className=" container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* texte */}
            <div className="text-center xl:text-left order-2 xl:order-none ">
              <span className="text-xl">Développeur web full stack</span>
              <h1 className="h1">
                Salut 👋! Je suis <br /> <span className="text-accent">TRAORE Souleymane</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80 ">
                Passionné par l'IA et ses applications,j'excelle dans le développement des solutions digitales
                 élégantes et je suis un expert dans plusieurs langages
                  de Programmation et technologies
              </p>
              {/* Btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8 ">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Téléchargez mon Cv</span>
                  <FiDownload className="text-lg"/>
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover: transition-all duration-500"/>
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo/>
            </div>
          </div>

        </div>  
    </section>
  )
}

export default Home;