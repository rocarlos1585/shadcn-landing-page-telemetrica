import colors from "@/constants/colors";
import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Solicita una
            <span style={{color:colors.secondary}} className=" bg-clip-text">
              {" "}
              DEMOSTRACIÓN{" "}
            </span>
            Gratis
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            ¿Quieres experimentar la revolución en rastreo GPS? ¡Es tu oportunidad! Agenda una demostración gratuita y descubre cómo nuestra tecnología puede transformar la seguridad y eficiencia de tus operaciones.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Solicita una Demo</Button>
          {/* <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            View all features
          </Button> */}
        </div>
      </div>
    </section>
  );
};
