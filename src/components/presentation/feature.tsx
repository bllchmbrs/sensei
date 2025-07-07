import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        {icon}
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon1.png" />
    ),
    title: "For Creatives",
    description:
      "Supercharge your workflow with Adobe Sensei AI, integrated with Photoshop, Illustrator, and Firefly.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon2.png" />
    ),
    title: "For Teams",
    description:
      "Collaborate in real-time and automate repetitive tasks with Adobe's advanced AI tools.",
  },
  {
    icon: (
      <img className="w-32 mx-auto mb-4" src="icon3.png" />
    ),
    title: "For Agencies",
    description:
      "Deliver projects faster with generative AI, smart editing, and seamless Adobe product integration.",
  }
];

export function FeatureLanding() {
  return (
    <section className="px-4 mt-12">
      <div className="container mx-auto mb-20 text-center">
        <div className="flex justify-center align-center relative z-5">
         
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default FeatureLanding;
