import React from "react";
import HTML_CSS_JS from "../Assets/HTML_CSS_JS.png";
import JAVA from "../Assets/JAVA.png";
import FIGMA from "../Assets/FIGMA.png";
import GITHUB from "../Assets/GITHUB.png";
import JUPYTER from "../Assets/JUPYTER.png";
import REACTPIC from "../Assets/REACT.png";
const Skills = () => {
  return (
    <div name="skills" className="w-full h-auto ">
      <div className="h-full flex flex-col justify-center max-w-5xl px-16 mx-auto">
        <div className="mt-20">
          <p className="text-5xl mx-2 sm:text-6xl font-bold text-blue-950">
            My Skills
          </p>
          <p className=" mx-1 text-gray-500">Tools that I master</p>
        </div>
        {/* all elements */}
        <div className="grid grid-cols-2 sm:grid-cols-3 grid-flow-row my-6 max-w-4xl justify-center">
          {/* skill 1 */}
          <div className="m-4 p-2 hover:scale-110 duration-500 hover:shadow-blue-900 shadow-md">
            <img
              src={HTML_CSS_JS}
              alt="HTML icon"
              className="w-30 aspect-square"
            />
            <p className="text-center m-1">HTML, CSS & JavaScript</p>
          </div>
          {/* skill 2 */}
          <div className="m-4 p-2 hover:scale-110 duration-500 hover:shadow-blue-900 shadow-md">
            <img
              src={REACTPIC}
              alt="HTML icon"
              className="w-30 aspect-square "
            />
            <p className="text-center m-1">React JS</p>
          </div>
          {/* skill 3 */}
          <div className="m-4 p-2 hover:scale-110 duration-500 hover:shadow-blue-900 shadow-md">
            <img src={GITHUB} alt="HTML icon" className="w-30 aspect-square" />
            <p className="text-center m-1">Git & Gtihub</p>
          </div>
          {/* skill 4 */}
          <div className="m-4 p-2 hover:scale-110 duration-500 hover:shadow-blue-900 shadow-md">
            <img src={FIGMA} alt="HTML icon" className="w-30 aspect-square" />
            <p className="text-center m-1">Figma</p>
          </div>

          {/* skill 5 */}
          <div className="m-4 p-2 hover:scale-110 duration-500 hover:shadow-blue-900 shadow-md">
            <img src={JUPYTER} alt="HTML icon" className="w-30 aspect-square" />
            <p className="text-center m-1">Jupyter notebook & Colab</p>
          </div>
          {/* skill 6 */}
          <div className="m-4 p-2 hover:scale-110 duration-500 hover:shadow-blue-900 shadow-md">
            <img src={JAVA} alt="JAVA icon" className="w-30 aspect-square" />
            <p className="text-center m-1">Java language</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
