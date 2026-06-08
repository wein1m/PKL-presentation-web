import swiggleUnderline from "../assets/elements/swiggle-underline.png";
import dorritos from "../assets/elements/dorritos.png";
import rocket from "../assets/elements/rocket.png";
import wavingLeftBot from "../assets/elements/waving-bottom_left.png";
import pointingRightBot from "../assets/elements/pointing-bottom_right.png";

export default function Chapter4Closing() {
  return (
    <section className="page-wrapper">
      <div className="content-wrapper -mt-16 gap-14">
        {/* 🐰 ---------- LEFT (KESIMPULAN) ----------- 🐰 */}
        <div className="w-[48%] content-section">
          <div className="title">
            <p>Refleksi Perjalanan PKL</p>
            <h1>Kesimpulan</h1>
          </div>

          <img
            src={swiggleUnderline}
            alt="underline"
            className="w-[22rem] -mt-3 mb-1"
          />

          <p className="desc">
            Dengan adanya pelaksanaan kerja praktek ini, memperoleh banyak
            manfaat yang mungkin tidak diperoleh dalam pelajaran di sekolah.
          </p>

          <p className="desc">
            Di dunia kerja yang sesungguhnya, dituntut untuk{" "}
            <span className="font-black not-italic opacity-100 text-[#232428]">
              mandiri, sabar, dan bertanggung jawab
            </span>{" "}
            dalam menyelesaikan setiap tugas.
          </p>

          <img
            src={dorritos}
            alt=""
            className="absolute -top-20 right-22 -rotate-12 w-44"
          />
        </div>

        {/* 🐰 ---------- RIGHT ----------- 🐰 */}
        <div className="w-[56%] flex flex-row gap-14 no-slide-nav z-999">
          {/* Sekolah */}
          <div className="card-wrapper w-1/2 bg-white hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3 relative">
              <div className="small-pill-wrapper bg-yellow-300 rotate-6 absolute -top-14 -right-2">
                Sekolah
              </div>
            </div>
            <p className="font-sniglet text-xl leading-relaxed tracking-wider opacity-80 flex">
              Terima kasih atas dukungan dan kesempatan yang diberikan! Semoga
              sekolah terus menghadirkan program yang bermanfaat bagi siswa di
              masa mendatang.
            </p>
          </div>

          {/* Sekolah */}
          <div className="card-wrapper w-1/2 bg-white hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3 relative">
              <div className="small-pill-wrapper bg-yellow-300 rotate-6 absolute -top-14 -right-2">
                Perusahaan
              </div>
            </div>
            <p className="font-sniglet text-xl leading-relaxed tracking-wider opacity-80 flex">
              Terima kasih atas kesempatan dan bimbingan yang telah diberikan!
              Semoga program magang terus ditingkatkan agar semakin bermanfaat
              bagi peserta magang berikutnya.
            </p>
          </div>
        </div>
      </div>

      {/* 🐰 ---------- CHAPTER TITLE & IMAGES ----------- 🐰 */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2">
        <h1 className="font-sniglet tracking-widest text-lg">Bab 4. Penutup</h1>
      </div>

      <img
        src={wavingLeftBot}
        alt=""
        className="absolute bottom-0 left-0 w-[18rem]"
      />
      <img
        src={pointingRightBot}
        alt=""
        className="absolute bottom-0 rotate-20 -right-5 w-[20rem]"
      />
      <img
        src={rocket}
        alt=""
        className="absolute top-14 right-20 w-[8rem] rotate-12"
      />
    </section>
  );
}
