
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2';


const ProjectsBtn = () => {
  return <div className='xl:mx:0'>
  <Link href={'/work'} className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group'>
    <Image src={'/rounded-text.png'} width={141} height={148} alt='' className='animate-spin-slow w-full max-w-[141px] max-h-[148px]'></Image>
    <HiArrowRight className='absolute text-4xl'/>
  </Link>
  </div>;
};

export default ProjectsBtn;
