export const ContactSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8 text-center border-t-4 border-green-600">
      <h3 className="text-lg font-semibold text-green-700 mb-2">
        Fale Conosco
      </h3>
      <p className="text-gray-700 text-sm mb-4">
        Dúvidas sobre matrículas, cursos ou visitas? Envie sua mensagem e
        retornaremos o quanto antes.
      </p>
      <a
        href="mailto:eeep.josemariamelo@escola.ce.gov.br"
        className="inline-block bg-green-700 text-white px-8 py-2 rounded-full font-semibold hover:bg-green-800 transition"
      >
        Enviar e-mail
      </a>
    </div>
  );
};
