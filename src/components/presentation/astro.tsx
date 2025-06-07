import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

export function AstroSection() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <Card
          color="blue"
          shadow={false}
          className="flex-col-reverse overflow-hidden rounded-3xl md:flex-row md:gap-8"
        >
          <CardBody className="md:py-20 md:px-14 md:w-7/12">
            <Typography color="white" className="font-bold">
              Adobe AI web architecture
            </Typography>
            <Typography
              variant="h2"
              color="white"
              className="mb-5 font-normal"
            >
              What is Adobe Sensei Studio?
            </Typography>
            <Typography variant="lead" color="white">
              Adobe Sensei Studio is an all-in-one AI platform for building, automating, and enhancing creative workflows. Integrate with Adobe Creative Cloud and leverage generative AI for design, video, and more.
            </Typography>
            <a href="#">
              <Button color="white" size="sm" variant="outlined" className="flex items-center mt-12">
                Get Started
              </Button>
            </a>
          </CardBody>
          <div className="relative grid h-96 place-items-center md:h-auto md:w-5/12">
            <img
              src="astro.png"
              alt="Adobe Sensei Studio platform"
              className="h-full w-full object-cover md:absolute"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default AstroSection;
