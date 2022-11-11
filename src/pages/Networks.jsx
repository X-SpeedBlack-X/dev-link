import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { MdAddLink } from "react-icons/md";
import { toast } from "react-toastify";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { db } from "../services/firebaseConnection";

export function Networks() {
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [portfolio, setPortfolio] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setLinkedin(snapshot.data().linkedin);
          setInstagram(snapshot.data().instagram);
          setPortfolio(snapshot.data().portfolio);
        }
      });
    }

    loadLinks();
  }, []);

  function handleSave(e) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      linkedin,
      instagram,
      portfolio,
    })
      .then(() => {
        toast.success("Social salvas com sucesso");
      })
      .catch((error) => {
        toast.error("Erro ao salvar");
      });
  }

  return (
    <div className="flex flex-col items-center min-h-screen pb-6">
      <Header />
      <h1 className="text-4xl text-white font-semibold mt-7">
        Suas redes socials{" "}
      </h1>

      <form
        action=""
        className="flex flex-col w-full max-w-[600px] px-4"
        onSubmit={handleSave}
      >
        <label htmlFor="" className="text-white">
          Link Linkedin
        </label>
        <Input
          placeholder="Digite a URL do Linkedin"
          type="url"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        <label htmlFor="" className="text-white">
          Link Instagram
        </label>
        <Input
          placeholder="Digite a URL do Instagram"
          type="url"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label htmlFor="" className="text-white">
          Link seu Portfolio
        </label>
        <Input
          placeholder="Digite a URL do seu Portfolio"
          type="url"
          value={portfolio}
          onChange={(e) => setPortfolio(e.target.value)}
        />

        <button
          type="submit"
          className="flex items-center justify-center p-2 bg-blue-300 hover:bg-blue-400 transition-colors mb-7 gap-2 text-white rounded"
        >
          Salvar links <MdAddLink size={24} />
        </button>
      </form>
    </div>
  );
}
