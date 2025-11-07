import { motion } from "framer-motion";
import escolaImg from "../assets/logoeeep.png";
import { Users, Target, Award, BookOpen, Briefcase, Globe } from "lucide-react";

export const About = () => {
  return (
    <main className="bg-gradient-to-b from-white to-green-50 min-h-screen pb-12">
  <section className="relative inset-0 w-screen -mx-[calc(50vw-50%)] bg-green-600 text-white text-center pt-6 sm:pt-10 pb-16 shadow-lg rounded-b-2xl -mt-4 ">
        <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-3xl font-extrabold drop-shadow-lg"
      >
        EEEP Dep. José Maria Melo
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-3 text-green-100 max-w-xl mx-auto text-sm sm:text-base px-4"
      >
        Uma escola de referência que forma cidadãos e profissionais preparados
        para os desafios do mundo moderno, unindo ensino médio e técnico com
        foco em prática e inovação.
      </motion.p>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        src={escolaImg}
        alt="Logo da EEEP Deputado José Maria Melo"
        className="mx-auto mt-8 w-32 sm:w-48 object-contain drop-shadow-lg"
      />
  </section>


      <div className="max-w-4xl mx-auto px-6 mt-12">
        {/* Missão, visão e valores */}
        <section className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: Target,
              title: "Missão",
              text: "Formar jovens com competência técnica, ética e humana, capazes de transformar o ambiente onde vivem.",
            },
            {
              icon: Globe,
              title: "Visão",
              text: "Ser referência em educação profissional, contribuindo para o desenvolvimento local e social.",
            },
            {
              icon: Award,
              title: "Valores",
              text: "Responsabilidade, inovação, respeito, compromisso e excelência no ensino.",
            },
          ].map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 + 0.3 }}
              className="bg-white shadow-md rounded-xl p-6 border-t-4 border-green-600"
            >
              <Icon className="w-8 h-8 text-green-700 mx-auto mb-2" />
              <h3 className="font-semibold text-green-700 mb-2">{title}</h3>
              <p className="text-gray-700 text-sm">{text}</p>
            </motion.div>
          ))}
        </section>

        {/* Estrutura e diferenciais */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-green-700 text-center">
            Estrutura e Diferenciais
          </h2>
          <p className="text-gray-600 text-center mt-2 mb-8">
            A EEEP Dep. José Maria Melo oferece um ambiente completo para o
            aprendizado técnico e pessoal.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Laboratórios modernos",
                desc: "Salas equipadas para aulas práticas de cada curso.",
              },
              {
                icon: Users,
                title: "Equipe dedicada",
                desc: "Professores e orientadores experientes, comprometidos com o sucesso dos alunos.",
              },
              {
                icon: Briefcase,
                title: "Estágio garantido",
                desc: "Parcerias com empresas e instituições para experiências reais no mercado de trabalho.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 + 0.3 }}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow border border-green-100"
              >
                <Icon className="w-8 h-8 text-green-700 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-700">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
