import { courses } from "../data/courses";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold mt-6 text-green-700">
        Conheça nossos cursos técnicos
      </h1>
      <p className="text-gray-600 mt-2">
        A EEEP Dep. José Maria Melo forma alunos para o futuro com ensino
        técnico de qualidade.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {courses.map((course) => (
          <Link
            to={`/curso/${course.id}`}
            key={course.id}
            className="bg-white shadow-md rounded-xl p-4 hover:scale-[1.02] transition-all"
          >
            <img
              src={course.image}
              alt={course.name}
              className="rounded-lg mb-3 w-full h-40 object-cover"
            />
            <h2 className="font-semibold text-lg text-green-700">
              {course.name}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
