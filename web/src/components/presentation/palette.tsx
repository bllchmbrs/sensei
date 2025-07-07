import {
    Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function PalettePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="hidden lg:flex">
            <img src="palette.png" alt="Adobe AI color palette" className="max-w-xl rounded-3xl mx-auto" />
          </div>
          
          <div className="text-center lg:text-left">
            <Typography
              placeholder=""
              color="blue"
              className="flex items-center justify-center lg:justify-start !font-bold text-lg mb-5"
            >
              Powered by Adobe Design Tools
            </Typography>

            <Typography
              placeholder=""
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              AI-driven color palettes and design foundations
            </Typography>
            <Typography placeholder="" color="gray" className="lg:pr-20">
              Instantly generate and customize color palettes, typography, and layouts with Adobe Firefly and Photoshop AI. Focus on creativity—let Adobe Sensei Studio handle the rest.
            </Typography>
            
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PalettePresentation;
