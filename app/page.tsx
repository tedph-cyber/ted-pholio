import Section from "../components/Section.js";
import About from "../components/about.js";
import { MyPage } from "../components/mypage";

export default function Home() {
  return (
    <div>
      <main className="bg-white dark:bg-black px-10 md:px-20 lg:px-40 dark?:bg-gray-900">
        <div>
          <About />
          <Section />
          <MyPage />
        </div>
      </main>
    </div>
  );
}
