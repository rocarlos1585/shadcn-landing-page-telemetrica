import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import lock from "../assets/lock.png";
import profit from "../assets/profit.png";
import roadmap from "../assets/roadmap.png";
import colors from "@/constants/colors";




interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Seguridad Reforzada",
    description:
      "Un sistema de rastreo GPS proporciona seguridad adicional al permitirte conocer la ubicación exacta de tus unidades en tiempo real.",
    image: lock,
  },
  {
    title: "Eficiencia operativa",
    description:
      "Para tu empresa, te permite optimizar rutas, programar mantenimientos preventivos, conocer estilos de manejo y reducir costos operativos al eliminar el uso no autorizado de tus vehículos.",
    image: profit,
  },
  {
    title: "Ahorro en tiempo y dinero",
    description:
      "Al mejorar la eficiencia en el uso de tus vehículos, un sistema de rastreo GPS te ayuda a reducir los gastos operativos y optimizar tiempo valioso.",
    image: roadmap,
  },
];

const featureList: string[] = [
  "Rastreo en tiempo real",
  "Optimización de rutas",
  "Atencion personalizada",
  "Precios",
  "Sin intermediarios",
  "Funcionamiento 24/7",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Soluciones en telemetria{" "}
        <span style={{color:colors.secondary}} className="bg-clip-text">
          para todos
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
