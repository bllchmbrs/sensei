import {
    ArrowRightIcon,
} from "@heroicons/react/24/outline";
import {
    Button,
    Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function CodePresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-8">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Typography
              color="blue"
              className="flex items-center justify-center lg:justify-start font-bold text-lg mb-5"
            >
              By Adobe, for creative developers
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Start with AI-powered code examples
            </Typography>
            <Typography color="blue-gray" className="lg:pr-20">
              Adobe Sensei Studio provides a robust foundation for creative coding, with AI-powered APIs and SDKs for Photoshop, Illustrator, and more. Focus on innovation, not boilerplate.
            </Typography>
            <a href="#">
              <Button color="dark" variant="text" size="sm" className="flex items-center mx-auto md:mr-auto lg:ml-0 gap-2 mt-4">
                Documentation <ArrowRightIcon strokeWidth={2} className="h-5 w-5" />
              </Button>
            </a>
          </div>
            <img src="code.png" alt="Adobe AI code examples" className="max-w-2xl rounded-3xl hidden md:flex mx-auto" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CodePresentation;
