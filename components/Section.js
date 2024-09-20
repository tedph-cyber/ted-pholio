import Image from "next/image";
import sky from "../public/images/sky.jpg";
import wall from "../public/images/wall.jpg";
import ted from "../public/images/ted.png";

export default function Section() {
  return (
    <section>
      <div id="project">
        <h3 className="text-3xl text-black dark:text-neutral-600 py-1">
          Services I offer
        </h3>
        <p className="text-md py-2 leading-8 text-black dark:text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          exercitationem repellendus maxime ullam tempore architecto provident
          unde expedita quam beatae, dolore eligendi molestias sint tenetur
          incidunt voluptas Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Temporibus <span className="text-teal-500">exercitationem</span>{" "}
          repellendus maxime ullam tempore architecto provident unde expedita
          quam beatae, dolore eligendi molestias sint tenetur incidunt voluptas
        </p>
        <p className="text-md py2 leading-8 text-black dark:text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          exercitationem repellendus maxime ullam tempore architecto provident
          unde expedita quam beatae, dolore eligendi molestias sint tenetur
          incidunt voluptas
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image
            src={ted}
            width={100}
            height={100}
            className="mx-auto"
            alt="Image"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Lorem Ipsum</h3>
          <p className="py-2 text-black dark:text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            exercitationem repellendus maxime ullam tempore architecto provident
            unde expedita quam beatae, dolore eligendi molestias sint tenetur
            incidunt voluptas
          </p>
          <h4 className="text-teal-600 py-4">Design Tools I use</h4>
          <p className="text-gray-800 dark:text-gray-400 py-1">PSD</p>
          <p className="text-gray-800 dark:text-gray-400 py-1">Paint</p>
          <p className="text-gray-800 dark:text-gray-400 py-1">Figma</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image
            src={wall}
            width={100}
            height={50}
            className="mx-auto"
            alt="Image"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Lorem Ipsum</h3>
          <p className="py-2 text-black dark:text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            exercitationem repellendus maxime ullam tempore architecto provident
            unde expedita quam beatae, dolore eligendi molestias sint tenetur
            incidunt voluptas
          </p>
          <h4 className="text-teal-600 py-4">Design Tools I use</h4>
          <p className="text-gray-800 dark:text-gray-400 py-1">PSD</p>
          <p className="text-gray-800 dark:text-gray-400 py-1">Paint</p>
          <p className="text-gray-800 dark:text-gray-400 py-1">Figma</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image
            src={sky}
            width={100}
            height={100}
            className="mx-auto"
            alt="Image"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Lorem Ipsum</h3>
          <p className="py-2 text-black dark:text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            exercitationem repellendus maxime ullam tempore architecto provident
            unde expedita quam beatae, dolore eligendi molestias sint tenetur
            incidunt voluptas
          </p>
          <h4 className="text-teal-600 py-4">Design Tools I use</h4>
          <p className="text-gray-800  dark:text-gray-400 py-1">PSD</p>
          <p className="text-gray-800  dark:text-gray-400 py-1">Paint</p>
          <p className="text-gray-800  dark:text-gray-400 py-1">Figma</p>
        </div>
      </div>
    </section>
  );
}
