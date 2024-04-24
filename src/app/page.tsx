import Inovation from "@/components/home/Inovation_heading_text/InovationHeadingText";
import Product from "@/components/home/products/Product";
import Visioneurecko from "@/components/home/visionEureko/visionEurecko";
import SafetyResponsibility from "@/components/home/safty&Responsibility/SaftyResponsibility";
import Testimonial from "@/components/home/testimonial/Testimonial";

// Home page component

export default function Home() {
  const loopwebsite = "/videos/loopwebsite.mp4";
  const gradientStyle = {
    background: 'linear-gradient(to top, #141414, #1A1A1A)' 
  };
  return (
    <div className="Home_Page ">
      <div className="relative bg-dark-gray -mt-20 md:mt-[-5rem] h-[76vh] md:h-screen md:max-h-screen w-full overflow-hidden">
        <video
          className="absolute z-2 w-full h-full md:h-full  object-cover opacity-100 transition-opacity duration-300"
          loop
          autoPlay
          muted
          playsInline
        >
          <source src={loopwebsite} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 right-0 bottom-0 left-0 z-3 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 absolute z-4 bottom-10 md:bottom-5 left-0 right-0">
          <h1 className="text-white  text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-6">
            Pioneering the Future of Artificial General Intelligence
          </h1>
          <div className="flex justify-center">
            <a
              href="/company"
              className="text-white border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 ease-in-out py-3 px-6 text-lg font-medium"
              aria-label="Learn about Eureko"
            >
              Learn About Eureko
            </a>
          </div>
        </div>
      </div>

      {/* Gradient Background Starts Here */}
      <div style={gradientStyle}>
        <Inovation />
        <Visioneurecko />
        <SafetyResponsibility />
        <Product />
        <Testimonial />
      </div>
      {/* Gradient Background Ends Here */}
    </div>
  );
}
