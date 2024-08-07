import React from "react";
import CircleCarousel from "../../components/CircleCarousel";
import ImageSlider from "../../components/ImageSlider";
import PlanningCard from "./PlanningCard";

export default function Formations() {
  const images = [
    require("../../images/reformer-gyrotonic.jpg"),
    require("../../images/reformer.jpg"),
    require("../../images/reformer-gyrotonic-evolis.png"),
    require("../../images/cours-1.jpg"),
    require("../../images/cours-2.jpg"),
  ];
  const formations = [
    {
      title: "Formation Anatomie",

      image: require("../../images/formation-5.png"),
      description:
        "Enseigne les principes anatomiques appliqués à la pratique et à l'enseignement des exercices de Pilates.",
    },
    {
      title: "Formation Matwork",
      image: require("../../images/formation-6.jpg"),
      description:
        "Enseigne les techniques et principes du Pilates pour renforcer les muscles, améliorer la posture, la flexibilité et l'équilibre.",
    },
    {
      title: "Formation Reformer",
      image: require("../../images/reformer.jpg"),
      description:
        "Enseigne l'utilisation du Reformer, un appareil spécifique, pour renforcer les muscles, améliorer la posture, la flexibilité et l'équilibre.",
    },
    {
      title: "Formation Cadillac",
      image: require("../../images/reformer-gyrotonic.jpg"),
      description:
        "Enseigne l'utilisation de l'appareil Cadillac pour renforcer les muscles, améliorer la posture, la flexibilité et l'équilibre.",
    },
    {
      title: "Formation Barril",
      image: require("../../images/formation-1.jpg"),
      description:
        "Enseigne l'utilisation de l'appareil Barril pour renforcer les muscles, améliorer la posture, la flexibilité et l'équilibre.",
    },
    {
      title: "Formation Chaise",
      image: require("../../images/formation-2.jpg"),
      description:
        "Enseigne l'utilisation de la Chaise pour renforcer les muscles, améliorer la posture, la flexibilité et l'équilibre.",
    },
    {
      title: "Formation ISP",
      image: require("../../images/formation-3.png"),
      description:
        "Enseigne une approche holistique du Pilates, combinant différentes techniques pour renforcer les muscles, améliorer la posture, la flexibilité et l'équilibre.",
    },
  ];
  const plans = [
    {
      title: "Intensive Matwork",
      niveau: "débutant et intermédiare",
      image: require("../../images/formation-6.jpg"),
      date: "Du 09/07 au 18/07/2024",
    },
    {
      title: "Matwork",
      niveau: "avancé",
      image: require("../../images/matwork-avancé.jpg"),
    },
    {
      title: "Reformer",
      niveau: "débutant et intermédiare",
      image: require("../../images/reformer.jpg"),
    },
    {
      title: "Reformer",
      niveau: "avancé",
      image: require("../../images/reformer.jpg"),
    },
  ];
  const calendar = [
    [
      "Mar. 09/07/2024  :  8h - 13.30h",
      "Mer. 10/07/2024  :  8h - 13.30h",
      "Jeu. 11/07/2024   :  8h - 13.30h",
      "Ven. 12/07/2024  :  8h - 13.30h",
      "Off",
      "Dim. 14/07/2024 :  14h - 19.30h",
      "Off",
      "Mar. 16/07/2024 :  8h - 13.30h",
      "Mer. 17/07/2024 :  8h - 13.30h",
      "Jeu. 18/07/2024  :  8h - 13.30h",
    ],
  ];

  return (
    <div className="flex flex-col mx-8 md:mx-12">
      <section className="my-14 flex flex-col-reverse lg:flex-row justify-center lg:justify-between gap-8">
        {/* carousel */}

        <CircleCarousel images={images} />
        {/* <CircleSwiperCarousel images={images} /> */}

        {/* text */}
        <div className="flex flex-col items-center md:items-baseline py-6 min-w-min md:px-5 gap-5 font-lato">
          <p className="text-marron text-4xl leading-snug ">
            Formations Biopilates :
          </p>
          <p className="leading-7 text-3xl text-marron">
            Devenez instructeur certifié avec Biopilates
          </p>
          <p className="leading-7 text-lg">
            Biopilates, pionnier du Stott Pilates en France depuis 2008, vous
            propose une expérience unique pour devenir un instructeur Pilates
            certifié et accompli.
          </p>
          <p className="leading-7 text-2xl text-marron">
            Pourquoi choisir Biopilates ?
          </p>

          <div className="text-base">
            <p className="leading-7">
              Plus qu'une simple formation, une véritable immersion dans
              l'univers du Pilates :
              <ul className="list-disc ml-5">
                <li>Pédagogie innovante et interactive</li>
                <li>Formateurs expérimentés et passionnés</li>
                <li>Suivi individualisé et mentorat</li>
                <li>Certifications reconnues</li>
                <li>
                  Réseau d'anciens élèves dynamiques Biopilates, c'est
                  l'assurance d'une formation d'excellence pour une carrière
                  épanouissante.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      {/* formation biopliates */}
      <section className="mt-4">
        <div className="mb-8">
          <p className="text-marron text-3xl leading-snug">Cours Biopilates</p>
          <p className="leading-7">
            Nos cours sont dispensés par des instructeurs expérimentés et
            certifiés. Réservez votre cours dès aujourd'hui sur l'application
            Bsport !
          </p>
        </div>
        <ImageSlider list={formations} action={"Inscrivez-vous"} />
      </section>

      {/* Planning */}

      <section className="mb-14">
        <p className="text-marron text-4xl leading-snug mb-10">Planning</p>
        <div className="flex justify-between overflow-hidden gap-4 py-10 px-10">
          {plans.map((plan, index) => (
            <PlanningCard key={index} plans={plan} calendar={calendar} />
          ))}
        </div>
      </section>
    </div>
  );
}
