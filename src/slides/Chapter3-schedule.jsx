import dorritos from "../assets/elements/dorritos.png";
import rocket from "../assets/elements/rocket.png";
import wavingLeftBot from "../assets/elements/waving-bottom_left.png";
import pointingRightBot from "../assets/elements/pointing-bottom_right.png";
import React from "react";

const schedule = [
  { day: "Senin", schools: ["Tunas Daud School"] },
  { day: "Selasa", schools: ["Taman Rama School"] },
  { day: "Rabu", schools: ["Taman Rama School"] },
  { day: "Kamis", schools: ["Taman Rama School"] },
  {
    day: "Jumat",
    schools: ["Stella Mundi School", "Moral Intelligent School"],
  },
];

export default function Chapter3Schedule() {
  return (
    <section className="page-wrapper">
      <div className="content-wrapper gap-20">
        {/* 🐰 ---------- LEFT (CONTENT) ----------- 🐰 */}
        <div className="w-[42%] content-section">
          <div className="title">
            <p>Kegiatan Mengajar</p>
            <h1>Jadwal Asistensi</h1>
          </div>

          <p className="desc">
            Selama PKL, saya bertugas sebagai asisten teacher yang membantu
            proses pembelajaran dan mengajar berbagai materi seperti Scratch,
            PictoBlox, Python, dan Minecraft Education di sekolah mitra Koding
            Akademi.
          </p>

          <img
            src={dorritos}
            alt=""
            className="absolute -top-16 right-16 w-40 -rotate-12"
          />
        </div>

        {/* 🐰 ---------- RIGHT (SCHEDULE TABLE) ----------- 🐰 */}
        <div className="w-[58%] no-slide-nav z-999">
          <div className="card-wrapper p-5">
            {/* Table Header */}
            <div className="grid grid-cols-[140px_1fr] overflow-hidden rounded-3xl border-3 border-black">
              <div className="bg-yellow-200 border-r-[3px] border-black px-6 py-4">
                <h3 className="font-black text-xl">Hari</h3>
              </div>

              <div className="bg-red-300 px-6 py-4">
                <h3 className="font-black text-xl">Sekolah</h3>
              </div>

              {/* Table Rows */}
              {schedule.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="px-6 py-5 font-bold text-lg border-t-[3px] border-black border-r-[3px] bg-amber-100/50 flex items-center">
                    {item.day}
                  </div>

                  <div className="px-6 py-5 border-t-3 border-black bg-white flex gap-2 items-center">
                    {item.schools.map((school, i) => (
                      <span
                        key={i}
                        className="bg-[#f3f3f3] border-2 border-black rounded-full px-4 py-1 font-bold shadow-[2px_2px_0px_#000]"
                      >
                        {school}
                      </span>
                    ))}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🐰 ---------- CHAPTER TITLE & IMAGES ----------- 🐰 */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2">
        <h1 className="font-sniglet tracking-widest text-lg">
          Bab 3. Pelaksanaan Praktik Kerja Lapangan
        </h1>
      </div>

      <img
        src={wavingLeftBot}
        alt=""
        className="absolute bottom-0 left-0 w-[14rem]"
      />
      <img
        src={pointingRightBot}
        alt=""
        className="absolute bottom-0 right-0 w-[14rem]"
      />
      <img
        src={rocket}
        alt=""
        className="absolute top-14 left-20 w-[1-0rem] rotate-12"
      />
    </section>
  );
}
