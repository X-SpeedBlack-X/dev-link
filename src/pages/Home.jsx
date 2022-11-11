import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaCode, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SocialMedia } from "../components/SocialMedia";
import { db } from "../services/firebaseConnection";

export function Home() {
  const [links, setLinks] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("createdAt", "asc"));
      getDocs(queryRef).then((snapshot) => {
        let list = [];

        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          });
        });

        setLinks(list);
      });
    }

    loadLinks();
  }, []);

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            linkedin: snapshot.data().linkedin,
            instagram: snapshot.data().instagram,
            portfolio: snapshot.data().portfolio,
          });
        }
      });
    }
    loadSocialLinks();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full py-4 px-0">
      <h1 className="mb-4 text-white lg:text-5xl text-4xl pt-16">
        Isaque de Sousa
      </h1>

      <span className="text-[#f1f1f1] mb-4">Veja meus links 👇 </span>

      <main className="flex flex-col max-w-2xl w-[90%] text-center">
        {links.map((link) => {
          return (
            <section
              key={link.id}
              className="bg-white w-full mb-5 p-2 select-none rounded hover:scale-105 transition-all"
              style={{
                background: link.bg,
              }}
            >
              <a href={link.url} target="_blank">
                <p
                  className="md:text-lg text-sm leading-[150%] text-black"
                  style={{ color: link.color }}
                >
                  {link.name}
                </p>
              </a>
            </section>
          );
        })}

        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer className="flex gap-2 justify-center m-4">
            <SocialMedia url={socialLinks?.instagram}>
              <FaInstagram size={35} color="#fff" />
            </SocialMedia>

            <SocialMedia url={socialLinks?.portfolio}>
              <FaCode size={35} color="#fff" />
            </SocialMedia>

            <SocialMedia url={socialLinks?.linkedin}>
              <FaLinkedin size={35} color="#fff" />
            </SocialMedia>
          </footer>
        )}
      </main>
    </div>
  );
}
