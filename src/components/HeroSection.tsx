import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-6 bg-gradient-to-b from-green-700 via-green-600 to-green-500 text-white rounded-b-3xl shadow-lg overflow-hidden">
      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl font-extrabold leading-tight drop-shadow-md"
      >
        EEEP Dep. José Maria Melo
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-sm sm:text-base mt-3 text-green-100 max-w-md"
      >
        Ensino médio integrado ao técnico — formando profissionais para o futuro.
      </motion.p>

      {/* Botão de ação (CTA) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8"
      >
        <Link
          to="#cursos"
          className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl hover:bg-green-50 transition-all duration-300"
        >
          <span>Conheça nossos cursos</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
};
