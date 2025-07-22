import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  modality:string,
}

const pricingList: PricingProps[] = [
  {
    title: "Venta",
    popular: 0,
    price: 1750,
    modality:'/Pago unico',
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Programa tu instalacion",
    benefitList: [
      "Rastreo en tiempo real",
      "Historial de ubicaciones hasta 6 meses",
      "Programacion de alertas",
      "Apagado de motor a distancia",
      "Boton de emergencias",
      "Bateria de respaldo",
    ],
  },
  {
    title: "Renta y Paquete familiar",
    popular: 1,
    price: 232,
    modality:'/mes',
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Programa tu instalacion",
    benefitList: [
      "Plataforma avanzada de rastreo",
      "Plan de datos telcel mensual",
      "Rastreo en tiempo real",
      "Historial de ubicaciones hasta 6 meses",
      "Delimitacion de Geo-Cercas",
      "Soporte tecnico 24/7",
      "Personalizacion de alertas"
    ],
  },
  {
    title: "Paquete empresarial",
    popular: 0,
    price: 360,
    modality:'/mensuales por unidad',
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Programa tu instalacion",
    benefitList: [
      "Plataforma avanzada de rastreo",
      "Plan de datos multiCarrier",
      "Rastreo en tiempo real",
      "Historial de ubicaciones de 1 a 5 años",
      "Diseño y gestion de rutas",
      "Delimitacion de Geo-Cercas",
      "Personalizacion de alertas",
      "Soporte Técnico permanente",
      "Cuentas ilimitadas"

    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Paquetes
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          disponibles{" "}
        </span>
        para ti 
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Elige el paquete que mas se adapte a tus necesidades.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Mas Popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price} mxn</span>
                <span className="text-muted-foreground"> {pricing.modality}</span>
              </div>

              {/* <CardDescription>{pricing.description}</CardDescription> */}
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
