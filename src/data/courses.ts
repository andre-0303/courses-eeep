import inforImg from "../assets/infor.png";
import admImg from "../assets/adm.png";
import agroImg from "../assets/agro.png";
import edfImg from "../assets/edf.png";


export const courses = [
  {
    id: "informatica",
    name: "Informática",
    description:
      "Aprenda a desenvolver sites, sistemas e trabalhar com tecnologia.",
    skills: ["Programação", "Banco de Dados", "Redes", "Web Design"],
    image: inforImg,
  },
  {
    id: "administracao",
    name: "Administração",
    description:
      "Gestão, liderança e finanças para o mercado moderno.",
    skills: ["Gestão de Pessoas", "Empreendedorismo", "Contabilidade"],
    image: admImg,
  },
  {
    id: "agropecuaria",
    name: "Agropecuária",
    description:
      "Sustentabilidade e produção agrícola de forma inteligente.",
    skills: ["Cultivo", "Zootecnia", "Irrigação", "Manejo"],
    image: agroImg,
  },
  {
    id: "edificacoes",
    name: "Edificações",
    description:
      "Projetos e obras que transformam o espaço ao seu redor.",
    skills: ["Desenho técnico", "Topografia", "Construção Civil"],
    image: edfImg,
  },
];
