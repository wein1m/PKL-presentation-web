import minecraftEdu from "../assets/tools/minecraft-edu.png";
import scratchJr from "../assets/tools/scratchjr.png";
import pictoblox from "../assets/tools/pictoblox.png";
import construct3 from "../assets/tools/construct3.png";
import vscode from "../assets/tools/vscode.png";
import colab from "../assets/tools/google-colab.png";

import dorritos from "../assets/elements/dorritos.png";
import rocket from "../assets/elements/rocket.png";
import wavingLeftBot from "../assets/elements/waving-bottom_left.png";
import pointingRightBot from "../assets/elements/pointing-bottom_right.png";

export default function Chapter2Tools() {
  const tools = [
    {
      title: "Minecraft Education",
      image: minecraftEdu,
      description: "Pembelajaran coding berbasis game interaktif.",
      rotate: "-rotate-3",
    },
    {
      title: "ScratchJr",
      image: scratchJr,
      description: "Dasar visual programming untuk anak-anak.",
      rotate: "rotate-2",
    },
    {
      title: "PictoBlox",
      image: pictoblox,
      description: "AI, robotics, dan visual coding.",
      rotate: "-rotate-2",
    },
    {
      title: "Construct 3",
      image: construct3,
      description: "Pembuatan game dengan visual scripting.",
      rotate: "rotate-2",
    },
    {
      title: "VSCode",
      image: vscode,
      description: "Editor untuk coding Python dan proyek lanjutan.",
      rotate: "-rotate-1",
    },
    {
      title: "Google Colab",
      image: colab,
      description: "Menjalankan Python dan eksperimen AI.",
      rotate: "rotate-3",
    },
  ];

  return (
    <div className="page-wrapper relative overflow-hidden">
      <div className="px-48 h-full flex flex-row justify-center items-center relative gap-20">
        {/* 🐰 ---------- LEFT SIDE ----------- 🐰 */}
        <div className="w-[45%] mb-16 relative">
          <p className="text-2xl opacity-70 mb-2">Pengalaman Mengajar</p>

          <h1 className="text-7xl font-black leading-none mb-6">
            Platform
            <br />
            Pembelajaran
          </h1>

          <p className="text-2xl leading-relaxed opacity-80">
            Selama kegiatan PKL di Koding Akademi, saya menggunakan berbagai
            platform pembelajaran interaktif untuk membantu proses mengajar
            coding, game development, AI, dan robotics kepada siswa dari
            berbagai jenjang usia.
          </p>

          <img
            src={dorritos}
            alt=""
            className="absolute -top-18 right-26 w-40 -rotate-12"
          />
        </div>

        <div className="w-[55%] h-fit grid grid-cols-2 gap-8 relative z-10">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`${tool.rotate} card-wrapper hover:translate-y-[-8px] transition-all duration-300 `}
            >
              <div className="flex items-center gap-5 mb-5">
                <div className="w-20 h-20">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h2 className="text-2xl font-black leading-none">
                  {tool.title}
                </h2>
              </div>

              <p className="text-lg leading-relaxed opacity-80">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="absolute top-24 right-44">
          <div className="bg-yellow-300 border-[3px] border-black px-6 py-3 rounded-full rotate-6 font-bold shadow-[5px_5px_0px_#000]">
            Creative Coding 🎮
          </div>
        </div>

        <div className="absolute bottom-24 left-32">
          <div className="bg-pink-300 ">
            AI & Robotics 🤖
          </div>
        </div> */}
      </div>

      <img
        src={wavingLeftBot}
        alt=""
        className="absolute bottom-0 left-0 w-[18rem]"
      />

      <img
        src={pointingRightBot}
        alt=""
        className="absolute bottom-0 -right-2 w-[12rem] rotate-12"
      />

      <img
        src={rocket}
        alt=""
        className="absolute top-16 left-20 w-[9rem] -rotate-6"
      />
    </div>
  );
}
