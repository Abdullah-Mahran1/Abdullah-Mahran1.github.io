import BlogImg from "../Assets/BlogImg.png";
import timerImg from "../Assets/StopwatchImg.png";
import ImgSearch from "../Assets/ImgSearch.png";
import ITImg from "../Assets/ITImg.webp";
import EShopImg from "../Assets/EShopImg.webp";
import { useState } from "react";

// My experinces as objects
const experiences = [
  {
    type: "#Web_Dev",
    title: "Simple Blog",
    preview_link: "https://github.com/Abdullah-Mahran1/Simple_Blog",
    img: BlogImg,
  },
  {
    type: "#Web_Dev",
    title: "Pomodoro Timer Project",
    preview_link: "https://github.com/Abdullah-Mahran1/Simple_pomodoro",
    img: timerImg,
  },
  {
    type: "#Web_Dev",
    title: "Image search w/unsplash API",
    preview_link: "https://github.com/Abdullah-Mahran1/image_searcher",
    img: ImgSearch,
  },
  {
    type: "#Non-Dev",
    title: "IT Assistant in QU H10",
    preview_link: "/portfolio",
    img: ITImg,
  },
  {
    type: "#Non-Dev",
    title: "Stock Management at barcodestore.online",
    preview_link: "http://www.barcodestore.online",
    img: EShopImg,
  },
];
const Experience = () => {
  const [fitlerVal, setFilterVal] = useState("");
  const handleClick = (btnVal) => {
    if (fitlerVal === btnVal) {
      setFilterVal("");
    } else {
      setFilterVal(btnVal);
    }
  };

  return (
    <div
      name="experience"
      className="bg-blue-950 w-full h-auto py-20 text-gray-300"
    >
      <div className="max-w-5xl flex flex-col mx-auto justify-center px-16 w-full">
        <p className="text-5xl mx-2 sm:text-6xl font-bold  border-b-4 border-white w-fit mb-2">
          Work
        </p>
        <p className="text-xl sm:text-xl  text-gray-400 mb-4">
          Checkout some of my previous work
        </p>
        {/* Filters Container */}
        <div className="flex flex-wrap">
          <button
            onClick={() => handleClick("")}
            className="text-center rounded-md px-2 py-1 m-3 bg-white text-blue-950"
          >
            #All_Experiences
          </button>
          <button
            onClick={() => handleClick("#Machine_learning")}
            className="text-center rounded-md px-2 py-1 m-3 bg-white text-blue-950"
          >
            #Machine_learning
          </button>
          <button
            onClick={() => handleClick("#Web_Dev")}
            className="text-center rounded-md py-1 px-2 m-3 bg-white text-blue-950"
          >
            #Web_Dev
          </button>
          <button
            onClick={() => handleClick("#Non-Dev")}
            className="text-center rounded-md px-2 py-1 m-3 bg-white text-blue-950"
          >
            #Non-Dev
          </button>
        </div>
        {/* All Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto">
          {experiences
            .filter((obj) => obj.type.includes(fitlerVal))
            .map((item) => (
              // for each card:
              <div className="shadow-lg group container flex flex-wrap justify-center w-full items-center  h-64">
                <div
                  style={{ backgroundImage: `url(${item.img})` }}
                  className="w-full flex justify-center rounded-t-2xl h-4/5 bg-cover duration-500 bg-center bg-no-repeat"
                >
                  {" "}
                  <p className="p-1 m-1 text-center rounded-2xl w-fit h-fit group-hover:font-bold bg-white text-blue-950">
                    {item.title}
                  </p>
                </div>
                <a
                  className="h-1/5 w-full group"
                  href={item.preview_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className=" p-2 text-center rounded-b-2xl h-fit w-full bg-white group-hover:font-bold text-blue-950 font-semibold">
                    {item.preview_link === "/portfolio"
                      ? "Mail for details"
                      : item.preview_link}
                  </button>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
