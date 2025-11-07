import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { ContactSection } from "../components/ContactSection";

export const Contact = () => {
  return (
    <main className="bg-gradient-to-b from-white to-green-50 min-h-screen pb-12">
      {/* Hero */}
      <section className="relative inset-0 w-screen -mx-[calc(50vw-50%)] bg-green-600 text-white text-center py-16 shadow-lg rounded-b-2xl -mt-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-3xl font-extrabold drop-shadow-lg"
        >
          Contato
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-3 text-green-100 max-w-xl mx-auto text-sm sm:text-base px-4"
        >
          Entre em contato com a EEEP Dep. José Maria Melo.  
          Estamos prontos para atender alunos, responsáveis e a comunidade.
        </motion.p>
      </section>
      <div className="max-w-4xl mx-auto px-6 mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-6 text-center"
        >
          {/* Endereço */}
          <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-green-600">
            <MapPin className="w-8 h-8 text-green-700 mx-auto mb-2" />
            <h3 className="font-semibold text-green-700 mb-2">Endereço</h3>
            <p className="text-gray-700 text-sm">
              CE-187, Guaraciaba do Norte - CE <br /> 62380-000
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-green-600">
            <Phone className="w-8 h-8 text-green-700 mx-auto mb-2" />
            <h3 className="font-semibold text-green-700 mb-2">Telefone</h3>
            <p className="text-gray-700 text-sm">(88) 3652-1299</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border-t-4 border-green-600">
            <Clock className="w-8 h-8 text-green-700 mx-auto mb-2" />
            <h3 className="font-semibold text-green-700 mb-2">Horário</h3>
            <p className="text-gray-700 text-sm">07:00 – 16:40</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">Localização</h2>
          <div className="w-full h-64 sm:h-96 rounded-xl overflow-hidden shadow-lg border border-green-200">
            <iframe
              title="Localização EEEP Dep. José Maria Melo"
              src="https://www.google.com/maps?q=EEEP+Dep.+José+Maria+Melo+Guaraciaba+do+Norte&output=embed"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        <div className="mt-16">
          <ContactSection />
        </div>
      </div>
    </main>
  );
};
