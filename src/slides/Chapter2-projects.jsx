import chatbotThumb from "../assets/projects/chatbot-thumb.png";
import chatbotVideo from "../assets/projects/chatbot.mp4";

import aiThumb from "../assets/projects/picto-thumb.png";
import aiVideo from "../assets/projects/picto.mp4";

import gameThumb from "../assets/projects/construct3-thumb.png";
import gameVideo from "../assets/projects/construct3.mp4";

import dorritos from "../assets/elements/dorritos.png";
import rocket from "../assets/elements/rocket.png";
import wavingLeftBot from "../assets/elements/waving-bottom_left.png";
import pointingRightBot from "../assets/elements/pointing-bottom_right.png";

export default function Chapter2Projects() {
  const projects = [
    {
      title: "AI Chatbot App",
      description:
        "Membuat chatbot interaktif menggunakan Python, Streamlit, dan Groq API untuk siswa SMP dan SMA.",
      tech: "Python • Streamlit • Groq API",
      thumbnail: chatbotThumb,
      video: chatbotVideo,
      rotate: "-rotate-2",
    },
    {
      title: "Face Recognition Door",
      description:
        "Project AI menggunakan PictoBlox untuk mendeteksi wajah dan membuka pintu otomatis.",
      tech: "PictoBlox • AI • Face Recognition",
      thumbnail: aiThumb,
      video: aiVideo,
      rotate: "rotate-2",
    },
    {
      title: "Construct 3 Shooting Game",
      description:
        "Membuat game shooting sederhana menggunakan Construct 3 dan visual scripting.",
      tech: "Construct 3 • Game Development",
      thumbnail: gameThumb,
      video: gameVideo,
      rotate: "-rotate-1",
    },
  ];

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector("video");
    const btn = e.currentTarget.querySelector("#play-btn");

    if (btn) {
      btn.style.display = "none";
    }

    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector("video");
    const btn = e.currentTarget.querySelector("#play-btn");

    if (btn) {
      btn.style.display = "flex";
    }

    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="page-wrapper">
      <div className="content-wrapper flex-col justify-center gap-10">
        {/* 🐰 ---------- TOP (CONTENT) ----------- 🐰 */}
        <div className="w-full content-section">
          <div className="title">
            <p>Project & Pengalaman</p>
            <h1>Tugas Yang Saya Kerjakan</h1>
          </div>

          <p className="desc">
            Selama kegiatan PKL di Koding Akademi, saya mengerjakan berbagai
            project berbasis AI, game development, dan pembelajaran coding
            interaktif untuk siswa SMP dan SMA.
          </p>

          <img
            src={dorritos}
            alt=""
            className="absolute -top-16 right-92 w-36 -rotate-12"
          />
        </div>

        {/* 🐰 ---------- BOTTOM ----------- 🐰 */}
        <div className="w-full flex items-center gap-8 z-999">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`${project.rotate} no-slide-nav card-wrapper h-full overflow-hidden relative hover:-translate-y-2 transition-all duration-300 group cursor-pointer`}
            >
              <div className="relative rounded-[2rem] overflow-hidden mb-6">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                <video
                  src={project.video}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-300"
                ></video>

                <div className="small-pill-wrapper bg-yellow-300 text-sm rotate-6 shadow-[4px_4px_0px_#000] absolute top-5 right-5">
                  Preview
                </div>

                <div
                  id="play-btn"
                  className="absolute inset-0 w-full h-full bg-black/20"
                >
                  <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 size-14 rounded-full bg-black/50 flex items-center justify-center hover:hidden">
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "10px solid transparent",
                        borderBottom: "10px solid transparent",
                        borderLeft: "18px solid white",
                        marginLeft: "4px",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="px-2">
                <p className="text-sm opacity-60 mb-2 font-sniglet tracking-widest">
                  {project.tech}
                </p>

                <h2 className="text-3xl font-black leading-none mb-4">
                  {project.title}
                </h2>

                <p className="text-lg leading-relaxed opacity-80 font-sniglet tracking-wider">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src={wavingLeftBot}
        alt=""
        className="absolute -bottom-4 -left-4 w-[10rem] rotate-12"
      />

      <img
        src={pointingRightBot}
        alt=""
        className="absolute bottom-0 -right-2 w-[12rem] rotate-12"
      />

      <img
        src={rocket}
        alt=""
        className="absolute top-16 right-24 w-[8rem] rotate-12"
      />
    </section>
  );
}
