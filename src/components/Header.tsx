import { useTheme } from "next-themes";
import Link from "next/link";
import { Sun, Moon } from "phosphor-react";
import { useEffect, useState } from "react";

export function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) return null;

  return (
    <div className="flex justify-between items-center max-w-[1000px] w-full mx-auto my-0 p-4 text-lg">
      <Link href="/">
        <p className="font-semibold text-2xl">Home</p>
      </Link>

      {!mounted ? null : (
        <button
          className="bg-zinc-200 dark:bg-zinc-700 hover:brightness-90 p-2 rounded"
          onClick={
            currentTheme === "light"
              ? () => setTheme("dark")
              : () => setTheme("light")
          }
        >
          {currentTheme === "light" ? <Moon size={25} /> : <Sun size={25} />}
        </button>
      )}
    </div>
  );
}
