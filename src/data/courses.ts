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
    details: [
      {
        title: "Sobre o curso",
        content:
          "O curso de Informática prepara o aluno para atuar em diferentes áreas da tecnologia, desenvolvendo desde sistemas web até o suporte técnico de computadores. Durante os três anos, o aluno aprende lógica, linguagens de programação e infraestrutura de redes.",
      },
      {
        title: "Mercado de trabalho",
        content:
          "O técnico em Informática pode trabalhar em empresas de tecnologia, órgãos públicos, startups e escritórios. Há grande demanda por profissionais com base sólida em programação e suporte técnico.",
      },
      {
        title: "Estágio e prática",
        content:
          "No 3º ano, os alunos realizam estágio supervisionado em empresas parceiras. É o momento de aplicar os conhecimentos adquiridos e iniciar o contato com o mercado de trabalho.",
      },
    ],
  },
  {
    id: "administracao",
    name: "Administração",
    description:
      "Gestão, liderança e finanças para o mercado moderno.",
    skills: ["Gestão de Pessoas", "Empreendedorismo", "Contabilidade"],
    image: admImg,
    details: [
      {
        title: "Sobre o curso",
        content:
          "O curso de Administração forma profissionais com visão crítica e empreendedora. O aluno aprende a planejar, organizar e gerenciar empresas, sempre com foco em resultados e boas práticas de gestão.",
      },
      {
        title: "Mercado de trabalho",
        content:
          "O técnico em Administração pode atuar em empresas privadas, públicas e no terceiro setor, nas áreas de RH, finanças, marketing e atendimento.",
      },
      {
        title: "Estágio e prática",
        content:
          "Os alunos vivenciam a rotina de um ambiente corporativo através de estágios supervisionados, participando de processos administrativos reais.",
      },
    ],
  },
  {
    id: "agropecuaria",
    name: "Agropecuária",
    description:
      "Sustentabilidade e produção agrícola de forma inteligente.",
    skills: ["Cultivo", "Zootecnia", "Irrigação", "Manejo"],
    image: agroImg,
    details: [
      {
        title: "Sobre o curso",
        content:
          "O curso técnico em Agropecuária capacita o aluno a lidar com todas as etapas da produção rural — do plantio à comercialização. Foca em práticas sustentáveis e uso de tecnologia no campo.",
      },
      {
        title: "Mercado de trabalho",
        content:
          "O profissional técnico pode atuar em fazendas, cooperativas, empresas agrícolas, órgãos de extensão rural e laboratórios agroindustriais.",
      },
      {
        title: "Estágio e prática",
        content:
          "Durante o estágio, o aluno vivencia o dia a dia no campo, aplicando os conhecimentos adquiridos em solos, irrigação, criação de animais e gestão rural.",
      },
    ],
  },
  {
    id: "edificacoes",
    name: "Edificações",
    description:
      "Projetos e obras que transformam o espaço ao seu redor.",
    skills: ["Desenho técnico", "Topografia", "Construção Civil"],
    image: edfImg,
    details: [
      {
        title: "Sobre o curso",
        content:
          "O curso de Edificações ensina a planejar e acompanhar construções civis, desde a fundação até o acabamento. O aluno aprende a interpretar projetos e aplicar normas técnicas de segurança.",
      },
      {
        title: "Mercado de trabalho",
        content:
          "O técnico pode trabalhar em construtoras, prefeituras, escritórios de arquitetura e empresas de engenharia civil.",
      },
      {
        title: "Estágio e prática",
        content:
          "Durante o estágio, os alunos participam de projetos reais, aprendendo sobre medições, orçamentos e acompanhamento de obras.",
      },
    ],
  },
];

