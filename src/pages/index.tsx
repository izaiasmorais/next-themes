import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full h-[100vh]">
      <Header />
      <Menu />
    </div>
  );
};

export default Home;
