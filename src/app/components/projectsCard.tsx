// import { GetStaticProps } from "next";
//comment
import Image from "next/image";
interface projectcardprop {
  img: string;
  title: string;
  description: string;
}
const projectsCard = ({ img, title, description }: projectcardprop) => {
  return (
    <div>
      <div className="bg-[#e9e9e9] w-xs  rounded-2xl p-3 flex flex-col animation-block">
        <Image
          src={`/${img}`}
          alt={title}
          layout="responsive"
          width={350}
          height={200}
          className="rounded-[6px] p-3 m-auto"
        />
        <div className="text-black p-3 font-bold text-2xl">{title}</div>
        <div className="text-black p-3">{description}</div>
      </div>
    </div>
  );
};
export default projectsCard;
