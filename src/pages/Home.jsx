import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SocialMedia } from "../components/SocialMedia";

export function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full py-4 px-0">
      <h1 className="mb-4 text-white lg:text-5xl text-4xl pt-16">
        Isaque de Sousa
      </h1>

      <span className="text-[#f1f1f1] mb-4">Veja meus links 👇 </span>

      <main className="flex flex-col max-w-2xl w-[90%] text-center">
        <section className="bg-white w-full mb-5 p-2 select-none rounded hover:scale-105 transition-all">
          <a href="#">
            <p className="md:text-lg text-sm leading-[150%] text-black">
              Instagram
            </p>
          </a>
        </section>

        <section className="bg-white w-full mb-5 p-2 select-none rounded hover:scale-105 transition-all">
          <a href="#">
            <p className="md:text-lg text-sm leading-[150%] text-black">
              Instagram
            </p>
          </a>
        </section>

        <section className="bg-white w-full mb-5 p-2 select-none rounded hover:scale-105 transition-all">
          <a href="#">
            <p className="md:text-lg text-sm leading-[150%] text-black">
              Instagram
            </p>
          </a>
        </section>

        <footer className="flex gap-2 justify-center m-4">
          <SocialMedia url="https://instagram.com/_isaque.s_">
            <FaInstagram size={35} color="#fff" />
          </SocialMedia>

          <SocialMedia url="https://www.linkedin.com/in/isaque-de-sousa/">
            <FaLinkedin size={35} color="#fff" />
          </SocialMedia>
        </footer>
      </main>
    </div>
  );
}
