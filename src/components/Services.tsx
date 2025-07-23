import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BikeIcon, CarFrontIcon, ContainerIcon, HeartHandshakeIcon } from "lucide-react";
import colors from "@/constants/colors";
import Lottie from 'lottie-react';

import gpsLottie from '../assets/lotties/gpsLottie.json'


interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [

  {
    title: "Plan familiar",
    description:
      "Tu familia es lo mas importante en el mundo, es por eso que hemos creado una solucion diseñada para ti y tu familia",
    icon: <HeartHandshakeIcon size="70px" style={{color:colors.secondary}}/>,
  },
  {
    title: "GPS para vehículos y flotillas",
    description:
      "Sabemos que gestionar una flotilla de vehículos puede ser un desafío. Es por eso que hemos creado una solución de rastreo GPS especialmente diseñada para empresas como la tuya. Con nuestra tecnología de vanguardia, puedes tomar el control total de tus vehículos y optimizar tus operaciones de manera efectiva.",
    icon: <CarFrontIcon size="70px" style={{color:colors.secondary}} />,
  },
  {
    title: "Sistema GPS para motocicletas",
    description:
      "Para ti biker, sabemos que tu motocicleta es parte de ti, para ello tenemos un sistema integral el cual aparte de darte la ubicacion en tiempo real de tu motocilcleta tambien cuenta con apagado a distancia",
    icon: <BikeIcon size="70px" style={{color:colors.secondary}} />,
  },
  {
    title: "Monitoreo de mercancías",
    description:
      "Para tus importaciones y exportaciones el conocer en todo momento la ubicacion de la misma es primordial, en telemetrica tenemos la solucion",
    icon: <ContainerIcon size="70px" style={{color:colors.secondary}} />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span style={{color:colors.secondary}} className=" bg-clip-text">
              ¿Que servicios te ofrece{" "}
            </span>
            TELEMETRICA?
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Sabemos que el mercado de rastreo esta en constante expansion, a continuacion te enlistamos nuestros servicios
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="w-[300px] md:w-[500px] lg:w-[600px] object-contain">
          <Lottie animationData={gpsLottie} loop={true} />
        </div>

        {/* <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        /> */}
      </div>
    </section>
  );
};
