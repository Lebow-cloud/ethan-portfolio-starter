import Image from 'next/image';

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-none'>
  <Image src={'/avatar.png'} width={737} height={678}/>
  </div>;
};

export default Avatar;
