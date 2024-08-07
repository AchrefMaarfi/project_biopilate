import React from "react";
import BlogCard from "../../components/BlogCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Blog() {
  const articles = [
    {
      title: "La maison vieille",
      ecrivain: "Véronique Fournier",
      description:
        "La Maison Vieille est un lieu de soutien et de bien-être pour les personnes âgées, visant à briser leur isolement et à offrir des moments enrichissants.",
      jaimes: 49,
      image: require("../../images/article-1.png"),
      link: "/article",
    },
    {
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 39,
      image: "",
      link: "",
    },
    {
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 67,
      image: "",
      link: "",
    },
    {
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 25,
      image: "",
      link: "",
    },
    {
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 49,
      image: "",
      link: "",
    },
    {
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 49,
      image: "",
      link: "",
    },
    {
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 49,
      image: "",
      link: "",
    },
    {
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 49,
      image: "",
      link: "",
    },
  ];
  return (
    <div className="flex flex-col mt-4 mx-8 md:mx-12 mb-12">
      <div className="mb-12">
        <div className="mb-8 flex flex-col justify-center items-center gap-6">
          <button className=" button-content flex-col justify-center text-base leading-6 rounded-lg px-4 py-1 bg-bgColor text-marron font-medium flex text-current transition duration-300 ease-in-out transform">
            Biopilates blog
          </button>
          <p className="text-marron text-3xl leading-snug font-ebGaramond font-bold">
            Découvrez le Pouvoir Transformateur du Pilates à Paris
          </p>
          <p className="leading-7 max-w-[1200px]">
            Bienvenue sur notre blog dédié au Pilates à Paris ! Que vous soyez
            débutant ou passionné, explorez avec nous les nombreux bienfaits du
            Pilates. Retrouvez des conseils d'experts, des routines inspirantes
            et des témoignages de transformation. Découvrez comment le Pilates
            peut améliorer votre bien-être physique, mental et enrichir votre
            vie quotidienne. Rejoignez-nous pour un voyage vers une meilleure
            version de vous-même, un mouvement à la fois.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {articles.map((article, index) => (
            <BlogCard key={index} article={article} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Stack spacing={2}>
          <Pagination
            count={6}
            rowsPerPage={6}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
}
