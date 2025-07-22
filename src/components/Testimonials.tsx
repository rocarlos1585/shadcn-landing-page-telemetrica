import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Roberto Carlos López",
    userName: "@rocarlos_1",
    comment: "El mes pasado sufri el robo de mi motocicleta, pude recuperarla gracias a ustedes.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Jose Galindo Arriaga",
    userName: "@gal_joe",
    comment:
      "Tengo 4 vehiculos que todo el dia estan en movimiento, gracias a telemetrica pude optimizar mejor el consumo de la gasolina",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Brenda de la Torre",
    userName: "@brendManzanita",
    comment:
      "telemetrica me ha ayudado muchisimo con mi tranquilidad, ya que mi padre ya esta grande y me preocupa que aun siga conduciendo",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Antonio Anguiano",
    userName: "@tony_anguiano_84",
    comment:
      "Como padre de familia mi prioridad numero 1 son mis hijos, con el plan familiar puedo saber todo el tiempo donde esta mi familia",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Humberto Murillo",
    userName: "@mur_5763",
    comment:
      "Tengo un vehiculo clasico, el cual ya han intentado robarse mas de 4 veces, desque que instale mi GPS esa preocupación se ha ido",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Armando Perez",
    userName: "@elComino64",
    comment:
      "Vivo en una de las colonias mas conflictivas de la ciudad y mi vehiculo es mi patrimonio, con uno mi GPS puedo dormir tranquilo",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Descubre porque
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          la comunidad{" "}
        </span>
        nos recomienda
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
