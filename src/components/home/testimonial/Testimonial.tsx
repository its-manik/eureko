import Image from "next/image";
import Woman2 from "../../../../public/images/testimonial/laptop.jpg";
import Orangebg from "../../../../public/images/testimonial/orangebg.png";

const Testimonial = () => {
  return (

    <div className="relative max-w-full mx-auto ">
      <Image
        // src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
        src={Woman2}
        alt="Person sitting casually in an armchair and smiling while looking ahead"
        className="h-96 w-full object-cover "
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white w-full text-3xl md:w-3/5 font-medium backdrop-blur-2xl p-2">
          {" "}
          <span className="text-4xl italic me-4">&quot;</span>I encourage my team to
          keep learning. Ideas in different topics or fields can often inspire
          new ideas and broaden the potential solution space.
          <span className="text-4xl italic ">&quot;</span>
        </h2>
      </div>
    </div>
  );
};

export default Testimonial;
