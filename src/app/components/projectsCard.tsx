// import { GetStaticProps } from "next";
import Image from "next/image";
interface projectcardprop {
  img: string;
  title: string;
  description: string;
}
const projectsCard = ({ img, title, description }: projectcardprop) => {
  return (
    <div>
      <div className="bg-[#e9e9e9] w-[355px] rounded-2xl p-3 flex flex-col ">
        <Image
          src={`/${img}`}
          alt={title}
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
