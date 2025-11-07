import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const Course = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course)
    return (
      <div className="text-center mt-10">
        <h1 className="text-xl font-semibold">Curso não encontrado.</h1>
        <Link to="/" className="text-green-600 underline mt-3 block">
          Voltar
        </Link>
      </div>
    );

  return (
    <main className="bg-gradient-to-b from-white to-green-50 min-h-screen pb-10">
      {/* Hero Section */}
      {/* Hero Section */}
<div className="relative w-full bg-white rounded-b-3xl overflow-hidden shadow-md">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="flex justify-center items-center bg-white"
  >
    <img
      src={course.image}
      alt={course.name}
      className="w-full max-h-56 sm:max-h-72 object-contain p-4"
    />
  </motion.div>

  <div className="absolute bottom-0 w-full text-center bg-gradient-to-t from-green-700/90 to-transparent py-6 px-4">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md"
    >
      {course.name}
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-sm sm:text-base mt-2 text-green-100 max-w-sm mx-auto"
    >
      {course.description}
    </motion.p>
  </div>
</div>

{/* Aluno em destaque */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.7 }}
  className="mt-8 flex flex-col items-center text-center"
>
  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-600 shadow-md">
    <img
      src={course.alunoImg}
      alt={`Aluno do curso de ${course.name}`}
      className="w-full h-full object-cover object-top"
    />
  </div>

  <p className="text-gray-700 mt-3 italic max-w-sm">
    “{course.aluno?.frase ||
      "Inspirando novas gerações na EEEP Dep. José Maria Melo."}”
  </p>
  {course.aluno?.nome && (
    <span className="text-sm text-green-700 font-medium mt-1">
      — {course.aluno.nome}
    </span>
  )}
</motion.div>


      <div className="max-w-3xl mx-auto px-6">

        {/* Skills */}
        <section className="mt-10">
          <h3 className="font-semibold text-lg text-green-800 text-center">
            Você vai aprender:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            {course.skills.map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-green-50 border border-green-100 text-green-800 px-3 py-2 rounded-xl text-center text-sm shadow-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Accordion com informações detalhadas */}
        <section className="mt-10">
          <h3 className="text-lg font-semibold text-green-800 mb-3 text-center">
            Detalhes do curso
          </h3>

          <Accordion type="single" collapsible className="w-full">
            {course.details.map((item, index) => {
              const icons = [BookOpen, Briefcase, GraduationCap];
              const Icon = icons[index] || BookOpen;

              return (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-green-700 font-semibold flex items-center gap-2">
                    <Icon className="w-5 h-5 text-green-600" />
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed px-1">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>

        {/* Botão de voltar */}
        <Link
          to="/"
          className="mt-10 mb-6 mx-auto flex items-center justify-center gap-2 text-green-700 font-semibold hover:text-green-800 transition"
        >
          <ArrowLeft className="w-5 h-5" /> Voltar para os cursos
        </Link>
      </div>
    </main>
  );
};
