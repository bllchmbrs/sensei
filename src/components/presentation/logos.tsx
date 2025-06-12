import { Typography } from "@material-tailwind/react";

const logos = [
  
  { name: "ibm", extension: "svg" },
  { name: "cisco", extension: "svg" },
  
  { name: "amazons", extension: "svg" },
  
];

export function LogoSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography
          color="blue-gray"
          className="text-xl font-extrabold mb-8"
        >
          Powered by Adobe Creative Cloud
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo, key) => (
            <img
              key={key}
              src={`logos/logo-${logo.name}.${logo.extension}`}
              alt={`${logo.name} logo`}
              className="w-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSectionOne;
