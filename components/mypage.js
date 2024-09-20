import Image from "next/image";
import stella from "../public/images/stella.png";
import sweats from "../public/images/sweats.png";

export function MyPage() {
  return (
    <section>
      <div id="tools">
        <h3 className="text-3xl py-1 text-black dark:text-gray-100">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-black dark:text-gray-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          exercitationem repellendus maxime ullam tempore architecto provident
          unde expedita quam beatae, dolore eligendi molestias sint tenetur
          incidunt voluptas
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <Image
            src={stella}
            alt="stella"
            priority
            className="rounded-lg object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={sweats}
            alt="sweats"
            priority
            className="rounded-lg object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
