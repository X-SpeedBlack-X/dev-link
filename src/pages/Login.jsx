import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { auth } from "../services/firebaseConnection";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if ((email === " ") | (password === "")) {
      alert("Preencha todos os campos!");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Bem-vindo de volta! :)");
        navigate("/admin", { replace: true });
      })
      .catch(() => {
        toast.error("Erro ao tentar fazer o Login!");
      });
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full ">
      <Logo />

      <form
        action=""
        className="flex flex-col w-full max-w-2xl"
        onSubmit={handleLogin}
      >
        <Input
          placeholder="Digite seu e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="*********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="h-9 rounded border-0 bg-blue-300 text-white"
          type="submit"
        >
          Acessar
        </button>
      </form>
    </div>
  );
}
