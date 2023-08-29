import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="text-gray-500 max-w-5xl mx-auto px-16  flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <p className="text-5xl mx-2 sm:text-6xl font-bold text-blue-950">
          Abdullah Mahran
        </p>
        <p className="text-3xl mx-2 sm:text-4xl  ">
          Machine Learning Developer
        </p>
        <p className="my-3 max-w-2xl">
          I'm a developer, I believe in knowing something about evrything and
          everything about something, I have experience in mobile development
          using kotlin, website development using react, tailwind css, HTML, &
          CSS. Also I have expertise in creative writing in Arabic, and many
          more
        </p>
        <button className=" flex justify-center items-center mu-2 text-blue-800 hover:font-bold hover:scale-110 duration-500 w-fit h-fit">
          View Work <br />
          <HiArrowNarrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Home;
