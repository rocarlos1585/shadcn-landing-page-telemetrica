import { Statistics } from "./Statistics";
import datos from "../assets/datos.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={datos}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Experiencia{" "}
                </span>
                y calidad garantizadas
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Estos números cuentan la historia de la tranquilidad y la protección que ofrecemos {`\n`} Te presentamos algunos datos fascinantes que ilustran por qué nuestros sistemas GPS son la elección perfecta para proteger lo que mas valoras
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
