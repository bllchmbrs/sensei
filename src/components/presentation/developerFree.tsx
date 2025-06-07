import {
    Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function DevPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white py-20">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="mb-8">
            <Typography
              color="blue"
              className="flex items-center font-bold text-lg mb-5"
            >
              Built on Adobe AI architecture
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
              Develop with Adobe's creative AI principles
            </Typography>
            <Typography color="blue-gray" className="lg:pr-32">
              Adobe Sensei Studio provides everything you need to build, automate, and enhance creative workflows using Adobe's AI-powered APIs and SDKs.
            </Typography>
          </div>
          <img src="consistenly.png" alt="Adobe AI architecture components" className="mx-auto hidden md:flex" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;
