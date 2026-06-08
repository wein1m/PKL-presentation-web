import dorritos from "../assets/elements/dorritos.png";
import rocket from "../assets/elements/rocket.png";
import wavingLeftBot from "../assets/elements/waving-bottom_left.png";
import pointingRightBot from "../assets/elements/pointing-bottom_right.png";

export default function Chapter2VisionMission() {
  return (
    <section className="page-wrapper">
      <div className="content-wrapper flex-col gap-16">
        {/* 🐰 ---------- TOP (Title) ----------- 🐰 */}
        <div className="content-section">
          <div className="title text-center">
            <p>Koding Akademi by Mediatech</p>
            <h1>Visi & Misi Perusahaan</h1>
          </div>

          <img
            src={dorritos}
            alt=""
            className="absolute -top-16 -right-28 w-36 -rotate-12"
          />
        </div>

        {/* 🐰 ---------- BOTTOM ----------- 🐰 */}
        <div className="flex flex-col gap-16 no-slide-nav z-999">
          {/* Visi */}
          <div className="card-wrapper bg-white hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 relative">
              <div className="small-pill-wrapper bg-yellow-300 rotate-6 absolute -top-14 -right-2">
                Visi
              </div>
            </div>
            <ul className="list-disc px-5 font-sniglet text-2xl leading-relaxed tracking-wider opacity-80 flex flex-col gap-1">
              Sebagai wadah untuk menyiapkan generasi muda yang berkualitas,
              produktif, dan cakap teknologi.
            </ul>
          </div>

          {/* Misi */}
          <div className="card-wrapper bg-white hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3 relative">
              <div className="small-pill-wrapper bg-yellow-300 rotate-6 absolute -top-14 -right-2">
                Misi
              </div>
            </div>
            <ol className="list-decimal list-inside px-5 font-sniglet text-2xl leading-relaxed tracking-wider opacity-80 flex flex-col gap-1">
              <li>
                Menyelenggarakan pelatihan kerja dan keterampilan di bidang
                komputer yang profesional di bidangnya.
              </li>
              <li>
                Melaksanakan pelatihan coding untuk pembuatan website dan
                aplikasi.
              </li>
              <li>Membantu penyaluran pekerjaan setelah pendidikan selesai.</li>
              <li>
                Membangun Denpasar menjadi kota pengembangan IT terkemuka di
                Indonesia.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* 🐰 ---------- CHAPTER TITLE & IMAGES ----------- 🐰 */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2">
        <h1 className="font-sniglet tracking-widest text-lg">
          Bab 2. Tinjauan Umum Perusahaan
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
        className="absolute bottom-0 right-0 w-[16rem]"
      />
      <img
        src={rocket}
        alt=""
        className="absolute top-10 left-20 w-[10rem] rotate-12"
      />
    </section>
  );
}
