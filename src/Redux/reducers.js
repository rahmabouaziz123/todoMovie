

import { list } from "../data";
import { ADDMOVIE, DELETEELEMENT, EDITMOVIE } from "./actionType";

 const moviesData= list

// export const moviesData = [
//   {
//     id: 1,
//    //  image: "images/img1.PNG",
//    image:"images/img1.PNG",

//     name: "Customers who viewed ",
//     date: "01/04/2019",
//     rating: 1,
//     video:"https://www.youtube.com/embed/alNZYxmXf-Q?list=PL843D2ED8D80FA673",
//     description:
//       "L’histoire cachée d’une spécialité locale salée, qui ne se trouve que sur la Côte d’Azur et dans la région. La socca jouit d’une importance historique et culturelle dont la portée l’emporte largement sur ses quatre ingrédients simples et rustiques.",
//   },
//   {
//     id: 2,
//     image: "images/img7.PNG",
//     name: "ON SOURIT POUR ",
//     date: "17/03/2014",
//     rating: 2,
//     video:"https://www.youtube.com/embed/lwcEPT9fgmA",
//     description:
//       "Documentaire imprévisible et fascinant, le nouveau long métrage documentaire d’Agnès Varda met en lumière son expérience en tant que réalisatrice, présentant un aperçu personnel de ce qu’elle appelle « la ciné-écriture ». La « Reine du cinéma français » Agnès Varda revient avec un nouveau documentaire après sa nomination aux Oscar pour son formidable Visages, villages.",
//   },
//   {
//     id: 3,
//     image: "images/img3.PNG",
//     name: "FROZEN II, 2019  ",
//     date: "18/05/2022",
//     rating: 5,
//     video:"https://www.youtube.com/embed/BkYsQwQUH_c",
//     description:
//       "Alexandre habite à Lyon avec sa femme et leurs enfants. Un jour, il découvre que le prêtre Bernard Preynat, qui l’a violé lors d’un camp scout quand il était petit, est encore en contact avec des enfants. Il commence une lutte pour la justice, avec deux autres victimes François et Emmanuel, en essayant de rassembler le plus grand nombre de témoignages possible. Mais cette lutte va aussi les mener à s’interroger sur leur vie, leurs relations et leur croyance et à affronter leurs familles. Ce film est basé sur",
//   },
//   {
//     id: 4,
//     image: "images/img4.PNG",
   
//     name: "Cro Man de Nick ",
//     date: "15/05/2022",
//     rating: 4,
//     video:"https://www.youtube.com/embed/ct0Ph93M-GU" ,
//     description: "Dans ce film d’animation pour adultes, Marona est un labrador croisé qui a déjà eu plusieurs maîtres. Sa personnalité est étroitement liée à celle des humains qu’elle rencontre. Après un accident, elle se remémore ses expériences dans différentes maisons. Au fur et à mesure que Marona voyage dans son passé, un portrait empreint d’empathie et d’amour se dégage de cette belle histoire pleine d’émotion d’une chienne normale et de sa vie extraordinaire.",
//   },
//   {
//     id: 5,
//     image: "images/img5.PNG",
//     name: "Cro Man Nick Park",
//     date: "30/07/2020",
//     rating: 2,
//     video:"https://www.youtube.com/embed/ct0Ph93M-GU",
//     description:
//       "ES quitte la Palestine à la recherche d’une patrie alternative, pour se rendre compte que la Palestine le poursuit. La promesse d’une nouvelle vie se transforme en une comédie d’erreurs : où qu’il aille, de Paris à New York, quelque chose lui rappelle toujours ses origines. Du réalisateur primé Elia Suleiman, une saga comique qui explore l’identité, la nationalité et l’appartenance, dans laquelle Suleiman pose la question fondamentale : où est le lieu où l’on se sent vraiment chez soi ?",
//   },
//   {
//     id: 6,
//     image: "images/img8.PNG",
//     name: "Cro Man de Nick Park",
//     date: "28/09/2021",
//     rating: 4,
//     video:"https://www.youtube.com/embed/lwcEPT9fgmA",
//     description: "Haïti, 1962 : un homme revient d’entre les morts seulement pour être envoyé dans l’enfer des champs de canne à sucre. A Paris, 55 ans plus tard, dans le pensionnat prestigieux de la Légion d’Honneur, une jeune Haïtienne avoue un vieux secret de famille à un groupe de nouveaux amis, sans imaginer que cette histoire étrange va convaincre un camarade de classe au cœur brisé de commettre l’impensable.",
//   },
// ];



// export const reducer = (state = moviesData, action) => {

  export const reducer = (state = moviesData, { type, payload }) => {


    switch (type) {
        case DELETEELEMENT:
            return [...state.filter((el) => el.id !== payload)];
            
            case ADDMOVIE:
                return   [...state,payload];

                case EDITMOVIE:
                    return state.map(el=>el.id=== payload.id?{...el,...payload}:el)
    
        default:
          
            return state;
    }

}