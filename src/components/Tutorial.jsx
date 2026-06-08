import { useEffect, useState } from "react";
import data from "../tutorial_content.json";

export default function Tutorial({ index, setIndex, kill }) {
  const [stepId, setStepId] = useState(0);

  let currTutorial;
  switch (index) {
    case 0:
      currTutorial = data.chatbot_tutorial;
      break;
    case 1:
      currTutorial = data.pictoblox_tutorial;
      break;
    case 2:
      currTutorial = data.game_tutorial;
      break;
    default:
      break;
  }
  const step = currTutorial[stepId];

  const nextStep = () => {
    if (stepId < currTutorial.length - 1) {
      setStepId((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (stepId > 0) {
      setStepId((prev) => prev - 1);
    }
  };

  const changeTutor = (id) => {
    setIndex(id);
    setStepId(0);
  };

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        kill();
      }
    };

    document.addEventListener("keydown", close);

    return () => document.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="flex absolute inset-0 items-center justify-center no-slide-nav overflow-hidden hover:cursor-default">
      <div
        onClick={kill}
        className="absolute inset-0 bg-black/50 z-[999] no-slide-nav hover:cursor-pointer"
      />
      <div className="relative flex flex-col justify-between gap-6 p-10 bg-[#f9f2e9] w-[80rem] h-[54rem] rounded-3xl z-[1000]">
        {/* 🐰 ---------- CONTENTS ----------- 🐰 */}
        {stepId === 0 ? (
          <div className="flex flex-col mx-auto  w-full h-fit -m-2">
            <h1 className="small-pill-wrapper bg-yellow-300 -rotate-2 w-fit text-3xl font-bold text-black -mt-2 mb-6 mx-auto">
              {step.title}
            </h1>
            <div className="h-[42rem] bg-[#bdb29696] rounded-2xl">
              <video
                src={step.video}
                controls={true}
                autoPlay={true}
                className="w-full h-full object-cover rounded-2xl bordr-2 border-black"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full h-fit">
            <div className="h-[36rem] bg-[#bdb29696] rounded-2xl">
              <img
                src={step.image}
                className="w-full h-full object-cover rounded-2xl border-2 border-black"
              />
            </div>
            <div className="max-w-5xl">
              <h1 className="text-4xl font-bold text-black mt-8">
                {step.title}
              </h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: step.desc,
                }}
                className="text-xl mt-2 opacity-80 font-sniglet tracking-wider"
              ></p>
            </div>
          </div>
        )}

        {/* 🐰 ---------- NAVIGATION ----------- 🐰 */}
        <div className="flex flex-row justify-between h-full items-end">
          <div
            onClick={prevStep}
            className={`h-fit flex flex-row justify-center items-center gap-2 text-lg font-sniglet tracking-widest text-white bg-black rounded-full py-2 px-6 ${stepId === 0 ? "opacity-70" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
              />
            </svg>
            Prev Page
          </div>
          <div
            onClick={nextStep}
            className={`h-fit flex flex-row justify-center items-center gap-2 text-lg font-sniglet tracking-widest text-white bg-black rounded-full py-2 px-6 ${stepId == currTutorial.length - 1 ? "opacity-70" : ""}`}
          >
            Next Page
            <svg
              className="rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
              />
            </svg>
          </div>
        </div>

        {/* 🐰 ---------- MARKER ----------- 🐰 */}
        <div className="absolute top-20 -right-46">
          <div className="flex flex-col gap-4 w-46">
            <div
              onClick={() => changeTutor(0)}
              className={`bookmark-tabs ${index != 0 ? "w-10 text-transparent" : "hover:pl-4"}`}
            >
              AI Chatbot
            </div>
            <div
              onClick={() => changeTutor(1)}
              className={`bookmark-tabs ${index != 1 ? "w-10 text-transparent" : "hover:pl-4"} bg-blue-400`}
            >
              PictoBlox AI
            </div>
            <div
              onClick={() => changeTutor(2)}
              className={`bookmark-tabs ${index != 2 ? "w-10 text-transparent" : "hover:pl-4"} bg-green-400`}
            >
              Construct 3
            </div>
          </div>
        </div>

        {/* 🐰 ---------- CLOSE BTN ----------- 🐰 */}
        <div
          onClick={kill}
          className="absolute -top-5 -left-5 bg-[#dd3f5d] rounded-full p-3 text-white font-sniglet tracking-widest text-lg flex flex-row gap-2 justify-center items-center aspect-square hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#fff"
              d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
