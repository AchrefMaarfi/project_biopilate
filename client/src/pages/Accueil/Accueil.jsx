import React from "react";
import ServiceCard from "../../components/ServiceCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Hero from "./Hero";
import Engagement from "./Engagement";
import CallToActionImg from "./CallToActionImg";
import BlogCard from "../../components/BlogCard";
import FAQ from "./FAQ";
import "../../../src/App.css";
import TemoignagesSection from "./TemoignagesSection";
import FormationSection from "./FormationSection";

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

export default function Accueil() {
  return (
    <div className="flex flex-col mx-8 md:mx-12 ">
      {/* Hero */}
      <Hero />
      {/* Intro */}
      <section className="mb-14 flex flex-col-reverse sm:flex-row flex-wrap justify-center lg:justify-between gap-10 font-lato">
        <div className="flex flex-col items-center md:items-baseline py-6  md:px-5 lg:w-[60%] gap-5 font-lato">
          <p className="text-marron text-xl sm:text-3xl leading-10 font-bold opacity-75 font-ebGaramond">
            Studio Biopilates Paris, votre havre de paix dédié au mieux être
          </p>
          <img
            loading="lazy"
            src={require("../../images/gym.jpg")}
            alt="Gym"
            className="rounded-full w-[220px] h-[220px] sm:w-[312px] sm:h-[312px] md:hidden mb-2"
          />
          <div className="text-sm sm:text-base">
            <p className="leading-7">
              Premier studio <strong>STOTT Pilates</strong> en France, nous vous
              offrons une expérience unique pour une transformation physique et
              mentale profonde.
            </p>
            <p className="leading-7">
              Cours de Pilates pour tous niveaux{" "}
              <strong>
                Reformer , Reformer et Gyrotonic , Reformer Gyrotonic
              </strong>{" "}
              et Evolis dispensés par des{" "}
              <strong>instructeurs certifiés</strong>.
            </p>
            <p className="leading-7">
              Renforcez vos muscles, perdez du poids, développez votre souplesse
              et atteignez vos objectifs grâce à nos cours de Pilates
              personnalisés. Profitez d'une <strong>séance découverte</strong>{" "}
              et laissez-vous guider sur la voie du bien-être.
            </p>
          </div>
        </div>
        <img
          loading="lazy"
          src={require("../../images/gym.jpg")}
          alt="Gym"
          className="rounded-full w-[220px] h-[220px] sm:w-[312px] sm:h-[312px] hidden md:block"
        />
      </section>

      {/* Services */}
      <section className="mb-20 flex flex-col justify-center items-center gap-4 ">
        <p className="text-marron text-3xl font-bold font-ebGaramond">
          Nos services
        </p>
        <p className="text-blueText text-2xl font-bold font-ebGaramond">
          Cours de Pilates pour tous niveaux
        </p>
        <div>
          <p className=" md:mx-20 text-center text-xl">
            Découvrez une transformation de votre bien-être physique et mental
            grâce à nos cours de Pilates.
          </p>
          <p className=" md:mx-20 text-center text-xl">
            Chaque mouvement vous guide vers une vitalité et une harmonie
            intérieure.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-4 2xl:gap-7">
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
          <ServiceCard></ServiceCard>
        </div>
      </section>

      {/* Formations */}
      <FormationSection />

      {/* Engagement */}
      <Engagement />
      {/* Temoignages */}
      <TemoignagesSection />
      {/* CTA */}
      <section className="mb-16 justify-center items-center w-full h-[200px] md:h-[410px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={require("../../images/bg-img-reserver.jpg")}
          alt=""
        />
        <div className="flex justify-between gap-4 mt-[-165px] md:mt-[-380px] z-[1] mx-6 sm:mx-10">
          <div className="flex flex-col justify-center gap-4 text-xs ">
            <p className="text-white sm:text-lg md:text-xl">
              Profitez d’un offre découverte à un prix raisonnable pour
              découvrir les bienfaits du Pilates.
            </p>
            <div className="flex gap-2">
              <button className="button-hover flex flex-col justify-center text-marron sm:text-base rounded-lg px-4 sm:px-8 sm:py-3 bg-white shadow-sm">
                Réserver
              </button>
              <button className="button-hover flex flex-col justify-center text-white sm:text-base rounded-lg px-8 py-3 border border-solid border-white shadow-sm">
                Contactez-nous
              </button>
            </div>
          </div>

          <CallToActionImg />
        </div>
      </section>

      {/* Blog */}
      <section className="mb-16 flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-2xl font-ebGaramond text-marron font-bold">Blog</p>
          <p className=" text-xs sm:text-xl max-sm:text-center font-lato">
            Trouvez l'harmonie entre corps et esprit : Bienvenue dans notre
            rubrique blog.
          </p>
        </div>

        <BlogCard article={articles[0]} />

        <div className="flex gap-3 m-3">
          <button className="flex justify-center items-center bg-bgColor rounded-full w-10 h-10">
            <FaArrowLeftLong className="text-marron" />
          </button>
          <button className="flex justify-center items-center bg-bgColor rounded-full w-10 h-10">
            <FaArrowRightLong className="text-marron" />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16 flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-3xl text-marron font-ebGaramond font-bold">FAQ</p>
          <p className="text-2xl font-ebGaramond">
            Trouvez ici les réponses aux questions fréquemment posées concernant
            les cours de Pilates, les horaires et les modalités d'inscription.
          </p>
        </div>
        <FAQ />
      </section>
    </div>
  );
}
