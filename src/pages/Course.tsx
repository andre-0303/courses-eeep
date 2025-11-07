import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";


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
    <div className="max-w-2xl mx-auto mt-6">
      <div className="flex justify-center items-center">
        <img
        src={course.image}
        alt={course.name}
        className="rounded-xl w-56 h-56 object-cover"
      />
      </div>
      <h1 className="text-2xl font-bold mt-4 text-green-700">
        {course.name}
      </h1>
      <p className="text-gray-700 mt-2">{course.description}</p>

      <h3 className="font-semibold mt-4 text-lg text-green-800">Você vai aprender:</h3>
      <ul className="list-disc list-inside text-gray-600 mt-2">
        {course.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      {/* Accordion de informações extras */}
{course.details && (
  <div className="mt-6">
    <Accordion type="single" collapsible>
      {course.details.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-green-800 font-semibold">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
)}


      <Link
        to="/"
        className="block mt-6 text-green-700 underline hover:opacity-80 flex items-center"
      >
        <ArrowLeft className="w-5 h-5"/> Voltar para os cursos
      </Link>
    </div>
  );
};
