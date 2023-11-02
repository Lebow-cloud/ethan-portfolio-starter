// next image
import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion

import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r font-primary/10 via-black/30">
        <div className="text-center flex flex-col justify-center xl:text-left h-full container">
          <h1 className="h1">
            Transforming Ideas <br />
            Into<span className="text-accent">Digital Reality</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting
          </p>
          <div class="flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      <div>Image</div>
    </div>
  );
};

export default Home;
