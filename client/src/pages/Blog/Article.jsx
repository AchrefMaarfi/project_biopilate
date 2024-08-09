import React from "react";
import { useParams } from "react-router-dom";
// import { articles } from "../../data/articles.json";

export default function Article() {
  const articles = [
    {
      id: 1,
      title: "La maison vieille",
      ecrivain: "Véronique Fournier",
      description:
        "La Maison Vieille est un lieu de soutien et de bien-être pour les personnes âgées, visant à briser leur isolement et à offrir des moments enrichissants.",
      jaimes: 49,
      image: require("../../images/article-1.png"),
    },
    {
      id: 2,
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 39,
      image: "",
    },
    {
      id: 3,
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 67,
      image: "",
    },
    {
      id: 4,
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 25,
      image: "",
    },
    {
      id: 5,
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 49,
      image: "",
    },
    {
      id: 6,
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 49,
      image: "",
    },
    {
      id: 7,
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 49,
      image: "",
    },
    {
      id: 8,
      title: "Le Pilates pour les débutants : 5 conseils pour bien commencer",
      ecrivain: "Par Biopilates",
      description:
        "Vous êtes débutant en Pilates et vous vous demandez comment bien commencer ? Découvrez nos 5 conseils pour débuter le Pilates en toute sérénité et profiter pleinement de ses bienfaits.",
      jaimes: 49,
      image: "",
    },
  ];
  const { id } = useParams(); // Extract the article ID from the URL parameters
  const article = articles.find((a) => a.id === parseInt(id)); // Find the article using the ID

  if (!article) {
    return <div>Article not found</div>;
  }
  return (
    <div className="flex flex-col mt-4 mx-8 md:mx-12 mb-12">
      <p className="text-marron text-6xl leading-snug font-ebGaramond font-bold">
        Ce n'est pas parce qu'on est vieux qu'on n'a pas besoin ni envie de
        vacances. 
      </p>
      <img
        src={article.image}
        alt={article.title}
        className="rounded-3xl w-full h-[400px] object-cover mt-4"
      />
    </div>
  );
}