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

export default function Chapter3Tools() {
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
    <section className="page-wrapper">
      <div className="content-wrapper justify-center gap-20">
        {/* 🐰 ---------- LEFT SIDE (CONTENT)----------- 🐰 */}
        <div className="w-[45%] content-section">
          <div className="title">
            <p>Pengalaman Mengajar</p>
            <h1>Platform Pembelajaran</h1>
          </div>

          <p className="desc">
            Selama kegiatan PKL di Koding Akademi, saya menggunakan berbagai
            platform pembelajaran interaktif untuk membantu proses mengajar
            coding, game development, AI, dan robotics kepada siswa dari
            berbagai jenjang usia.
          </p>

          <img
            src={dorritos}
            alt=""
            className="absolute -top-18 right-32 w-40 -rotate-12"
          />
        </div>

        <div className="w-[55%] h-fit grid grid-cols-2 gap-8 relative z-999 hover:cursor-default">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`${tool.rotate} no-slide-nav card-wrapper hover:translate-y-2 transition-all duration-300`}
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

              <p className="text-lg leading-relaxed opacity-80 font-sniglet tracking-wider">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
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
    </section>
  );
}
