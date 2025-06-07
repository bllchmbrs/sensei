import {
    Button,
    Card,
    Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

function StatsCard({ count, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" className="mb-4 text-5xl text-dark">
        {count}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {title}
      </Typography>
      <Typography color="gray">
        {desc}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "140+",
    title: "Coded Elements",
    desc: "From buttons, to inputs, navbars, alerts, tabels, cards or charts."
  },
  {
    count: "10",
    title: "Example Pages",
    desc: "Save months of work when you use our pre-made pages."
  },
  {
    count: "30+",
    title: "Design Blocks",
    desc: "Mix the already made sections and unleash your creativity."
  },
  {
    count: "40+",
    title: "Global Styles",
    desc: "Colors, typography system, shadows, and blur effects are ready to be used."
  },
];

export function FigmaPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-left">
            <Typography
              color="blue"
              className="font-bold text-lg mb-5"
            >
              Fully Coded Components powered by Adobe AI
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Adobe Sensei Studio Pro
            </Typography>
            <Typography color="blue-gray" className="mb-5 lg:w-[30rem]">
              All sections and pages are built with Adobe's AI-powered components, ensuring beautiful, responsive design and seamless integration with Creative Cloud apps.
            </Typography>
          </div>
          <div className="lg:flex relative">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div className="grid gap-y-16 gap-x-8 grid-cols-2 md:grid-cols-2 mb-8">
                  {stats.map((props, key) => (
                    <StatsCard key={key} {...props} />
                  ))}
                </div>
                <a href="https://www.creative-tim.com/product/astro-launch-ui-pro" target="_blank">
                  <Button color="dark" className="flex items-center">
                     Sensei Studio Pro
                  </Button>
                </a>
              </div>
            </div>
            <img src="components.png" alt="Adobe AI components" className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32 -top-24" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FigmaPresentation;
