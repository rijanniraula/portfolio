// import { GetStaticProps } from "next";
import Image from "next/image";

interface cardprops {
  img: string;
  name: string;
}

const skillsCard = ({ img, name }: cardprops) => {
  return (
    <div>
      <div className="w-52 h-52 bg-[#d9d9d9] rounded-2xl flex flex-col justify-center items-center flex-grow ">
        <Image src={`/${img}`} alt={name} width={80} height={80} />
        <div className="text-black font-bold   text-[18px] p-4">{name}</div>
      </div>
    </div>
  );
};
export default skillsCard;
