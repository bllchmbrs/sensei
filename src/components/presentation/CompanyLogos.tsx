import { Typography } from "@material-tailwind/react";

const companyLogos = [
  {
    name: "Amazon",
    src: "/logos/logo-amazon.svg",
  },
  {
    name: "Microsoft",
    src: "/logos/logo-microsoft.svg",
  },
  {
    name: "IBM",
    src: "/logos/logo-ibm.svg",
  },
  {
    name: "Salesforce",
    src: "/logos/logo-salesforce.svg",
  },
  {
    name: "Vodafone",
    src: "/logos/logo-vodafone.svg",
  },
  {
    name: "Cisco",
    src: "/logos/logo-cisco.svg",
  },
];

export function CompanyLogos() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <Typography
          color="blue-gray"
          className="text-xl font-extrabold mb-8"
        >
          Trusted by Industry Leaders
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {companyLogos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={`${logo.name} logo`}
              className="w-32 h-16 object-contain opacity-50 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyLogos; 