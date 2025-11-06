import { HeroSection } from "../components/HeroSection";
import { courses } from "../data/courses";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      <section
        id="cursos"
        className="max-w-3xl mx-auto text-center px-4 py-10"
      >
        <h2 className="text-2xl font-bold text-green-700">
          Conheça nossos cursos técnicos
        </h2>
        <p className="text-gray-600 mt-2">
          Cada curso prepara você para o mercado de trabalho e para a vida.
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
                className="rounded-lg mb-3 w-55 h-55     object-cover"
              />
              <h2 className="font-semibold text-xl text-green-700">
                {course.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{course.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
