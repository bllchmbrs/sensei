import { Typography } from "@material-tailwind/react";

const logos = [
  "amazon",
  "microsoft", 
  "ibm",
  "salesforce",
  "cisco",
  "vodafone",
];

export function LogoSectionOne() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography
          color="blue-gray"
          className="text-xl font-extrabold mb-8"
        >
          Trusted by Leading Companies
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {logos.map((logo, key) => (
            <img
              key={key}
              src={`logos/logo-${logo}.svg`}
              alt={`${logo} logo`}
              className="w-40 h-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSectionOne;
