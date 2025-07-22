import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Qué marca de equipos ofrecen?",
    answer:
      "El dispositivo GPS que se instala en los vehículos o motocicletas es de la marca Concox, marca líder a nivel mundial y con garantía de cambio inmediato en caso de cualquier falla. Nuestro stock de equipos nos permite que dicho cambio sea inmediato.",
    value: "item-1",
  },
  {
    question: "¿Qué plataforma usa el equipo?",
    answer:
      "Para equipos en venta, se ofrece por default la plataforma Tracksolid, que permite bajo el formato de una app, un monitoreo eficiente y amigable de uno o varios vehículos o motocicletas. Para equipos en renta, la plataforma ofertada es Wialon, una plataforma robusta y de alto desempeño, ideal para empresas con flotillas que buscan optimizar su logística y operación diaria, generando eficiencias en consumo de combustible, control de personal y vehículos, mantenimiento y conducción, con generación de data útil para la toma de decisiones.",
    value: "item-2",
  },
  {
    question: "¿Cuánto cuesta instalar el equipo?",
    answer:
      "El costo de instalación por vehículo o motocicleta parte de los $800 pesos en la Zona Metropolitana de Guadalajara. Fuera de Guadalajara, el costo incrementa según los gastos de desplazamiento. En flotillas, el costo puede disminuir por volumen.",
    value: "item-3",
  },
  {
    question: "¿Dónde instalan el equipo?",
    answer:
      "La instalación se acuerda con cada cliente tras el pago o la firma del contrato, ya sea en su domicilio o en nuestras instalaciones.",
    value: "item-4",
  },
  {
    question: "¿Cuánto tiempo toma instalar el equipo?",
    answer:
      "El tiempo de instalación varía según el tipo de vehículo, pero en promedio toma entre 30 y 40 minutos. En flotillas de modelos similares, el proceso se optimiza, e incluso ofrecemos instalar en fines de semana o días festivos.",
    value: "item-5",
  },
  {
    question: "¿Cuáles son las formas de pago?",
    answer:
      "Recomendamos el pago por transferencia o depósito bancario para emitir factura de inmediato, aunque también aceptamos pagos en efectivo en compras minoristas.",
    value: "item-6",
  },
  {
    question:
      "¿Si ya tengo equipos GPS instalados previamente, puedo contratar el uso de su plataforma para el monitoreo de mi flotilla?",
    answer:
      "Sí. Es posible configurar la mayoría de los equipos GPS del mercado para usar nuestra plataforma. Solo se requiere información técnica básica, como el IMEI del dispositivo.",
    value: "item-7",
  },
  {
    question: "¿Se firma algún contrato y si es así, cuál es el plazo mínimo?",
    answer:
      "Para equipos en venta no se firma contrato; el pago genera la factura y activa la garantía. En el caso de renta, sí se firma un contrato mínimo de un año que garantiza soporte técnico, privacidad, cobertura y otros beneficios.",
    value: "item-8",
  },
  {
    question: "¿Cuánto cuesta la asistencia técnica por revisar el equipo?",
    answer:
      "Durante el periodo de garantía (1 año en ventas, ilimitada en renta), la asistencia técnica en Guadalajara es gratuita. Fuera de Guadalajara, se suman los costos de desplazamiento.",
    value: "item-9",
  },
  {
    question: "¿Cada cuándo recomiendan actualizar la plataforma?",
    answer:
      "La plataforma Tracksolid debe renovarse cada año ($600 pesos) o bien por 10 años ($1,400 pesos). La plataforma Wialon (en renta) se actualiza constantemente y siempre ofrecemos acompañamiento para optimizar su uso.",
    value: "item-10",
  },
];


export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Preguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frecuentes
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        ¿Sigues teniendo dudas?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contactanos
        </a>
      </h3>
    </section>
  );
};
