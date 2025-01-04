import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you want
});

export default function Home() {
  return (
    <div
      className={`${lato.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-lato)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <h1>Soar FrontEnd Task Dashboard</h1>
      </main>
    
    </div>
  );
}
