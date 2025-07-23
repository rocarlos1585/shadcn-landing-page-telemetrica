import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AlarmClockCheckIcon,  Network, RouteIcon, ShieldIcon} from "lucide-react";
import colors from '../constants/colors';


interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <ShieldIcon color={colors.secondary} size="70px" />,
    title: "Protege tu inversión",
    description:
      "Nuestros sistemas de rastreo GPS protegen tu inversión, ¿Preocupado por el robo de tu auto, motocicleta o la seguridad de tu flotilla? Descubre cómo podemos darte tranquilidad",
  },
  {
    icon: <RouteIcon color={colors.secondary} size="70px"  />,
    title: "Optimiza tus operaciones",
    description:
      "Con nuestros servicios puedes desde mejorar las rutas de entrega, monitorear los estilos de manejor hasta reducir costos, haz tu negocio mas eficiente.",
  },
  {
    icon: <Network color={colors.secondary} size="70px" />,
    title: "Mantente siempre conectado",
    description:
      "Ya sea que desees saber la ubicacion de tu vehiculo personal o de toda tu flotilla, en TELEMETRICA te brindamos el control total en la palma de tu mano ",
  },
  {
    icon: <AlarmClockCheckIcon color={colors.secondary} size="70px" />,
    title: "Cumplimiento y tranquilidad",
    description:
      "Tenemos garantia de cumplimiento y tranquilidad. Nuestros sistemas de rastreo GPS facilitan el cumplimiento de tus compromisos y al mismo tiempo, te brindan la tranquilidad de saber que tus activos están seguros.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        En{" "}
        <span style={{color:colors.secondary}} className={`color:${colors.primary} bg-clip-text`}>
          TELEMETRICA{" "}
        </span>
        nos comprometemos a
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit! */}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
