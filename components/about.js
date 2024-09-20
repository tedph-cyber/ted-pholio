import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import wall from "../public/images/wall.jpg";

export default function About() {
  return (
    <div>
      <div id="about" className="text-center p-2">
        <h2 className="text-5xl py-2 text-teal-500 font-medium ">TeD</h2>
        <h3 className="text-2xl py-2 dark:text-teal-50 text-black md:text-3xl">
          Cyber-Dev 
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-600 md:text-xl max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          exercitationem repellendus maxime ullam tempore architecto provident
          unde expedita quam beatae, dolore eligendi molestias sint tenetur
          incidunt voluptas
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 ">
        <Image src={wall} alt={"TeD"} fill className="h-[10px] w-[10px]" />
      </div>
    </div>
  );
}
