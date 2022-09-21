import { GithubLogo } from "phosphor-react";

export function Menu() {
  return (
    <div className="max-w-[1000px] w-full mx-auto my-8 p-4  flex flex-col">
      <h1 className="text-6xl font-semibold">Next themes</h1>

      <p className="text-lg font-semibold mt-4">
        Veja as vantagens de utilizar o next-themes{" "}
        <a
          className="text-blue-400"
          href="https://github.com/pacocoursey/next-themes"
        >
          aqui.
        </a>
      </p>

      <p className="text-lg font-semibold my-4">
        Exemplo de uma aplicação Next.js que utiliza next-themes.
      </p>

      <a
        href="https://github.com/izaiasmorais/next-themes"
        className="bg-purple-500 hover:bg-purple-700 w-max py-2 px-3 rounded text-white
      font-medium transition-colors flex gap-1 items-center"
      >
        <GithubLogo size={25} /> Ver repositório
      </a>
    </div>
  );
}
