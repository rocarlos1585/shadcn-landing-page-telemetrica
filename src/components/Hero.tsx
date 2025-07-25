import { Button } from "./ui/button";
import { HeroCards } from "./HeroCards";
import colors from "@/constants/colors";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[red] text-transparent bg-clip-text">
              Telemetrica
            </span>{" "}
            es la solucion
          </h1>{" "}
          para{" "}
          <h2 className="inline">
            <span style={{color: colors.secondary}} className={`inline bg-gradient-to-r bg-clip-text`}>
              el rastreo de 
            </span>{" "}
            tus vehiculos
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Toma el control de tus rutas, el consumo de tus flotillas y la seguridad de tu patrimonio, conociendo su ubicacion los 365 dias del año
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Solicita una DEMO</Button>

          {/* <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a> */}
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      {/* <div className="shadow"></div> */}
    </section>
  );
};
