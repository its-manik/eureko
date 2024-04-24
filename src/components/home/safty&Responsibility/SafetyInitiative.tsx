import Link from "next/link";
import { SafetyResponsibilityInitiative } from "@/types";

const SafetyInitiative: React.FC<{
  initiative: SafetyResponsibilityInitiative;
}> = ({ initiative }) => {
  return (
    <div className="bg-white bg-opacity-5 cursor-pointer hover:-translate-y-4 transition-all duration-500 ease-in-out group relative h-72 md:h-[370px] shadow-md rounded-md p-6 ">
      <h3 className="text-xl text-[#fff] font-semibold mb-3">
        {initiative.title}
      </h3>
      <p className="text-base tracking-wide max-h-36 md:max-h-44  overflow-hidden text-[#fff]">
        {initiative.description}
      </p>
      <Link
        href={initiative?._id ? initiative?._id : "https://eureko.ai"}
        passHref
        className="hover:text-[#fff] text-[#fff] border border-[#fff] hover:bg-[#000] hover:border-[#000] tracking-wide absolute bottom-0 left-20px mb-6 px-5 py-2 rounded-full mt-4 inline-block"
      >
        Learn More
      </Link>
    </div>
  );
};

export default SafetyInitiative;
