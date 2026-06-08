import dorritos from "../assets/elements/dorritos.png";
import rocket from "../assets/elements/rocket.png";
import wavingLeftBot from "../assets/elements/waving-bottom_left.png";
import pointingRightBot from "../assets/elements/pointing-bottom_right.png";

export default function Chapter1() {
  return (
    <section className="page-wrapper">
      <div className="content-wrapper gap-16">
        {/* 🐰 ---------- LEFT (LATAR BELAKANG) ----------- 🐰 */}
        <div className="w-1/2 content-section">
          <div className="title">
            <p>Latar Belakang Kegiatan</p>
            <h1>Pendahuluan</h1>
          </div>

          <p className="desc mt-2">
            Kurikulum SMK TI Bali Global Denpasar menuntut siswa memiliki ilmu
            pengetahuan dan keterampilan praktis di bidang teknologi informasi.
          </p>

          <p className="desc">
            Praktek Kerja Lapangan dirancang agar siswa dapat bersosialisasi
            dengan lingkungan baru, belajar bertanggung jawab, serta siap
            menghadapi tantangan nyata di dunia usaha/industri.
          </p>

          <img
            src={dorritos}
            alt=""
            className="absolute -top-16 right-16 w-36 -rotate-12"
          />
        </div>

        {/* 🐰 ---------- RIGHT ----------- 🐰 */}
        <div className="w-1/2 flex flex-col gap-14 no-slide-nav z-999">
          {/* Tujuan */}
          <div className="card-wrapper bg-white hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 relative">
              <div className="small-pill-wrapper bg-yellow-300 rotate-6 absolute -top-14 -right-2">
                Tujuan
              </div>
            </div>
            <ul className="list-disc px-5 font-sniglet text-xl leading-relaxed tracking-wider opacity-80 flex flex-col gap-1">
              <li>Meningkatkan mutu SDM & adaptasi di dunia kerja</li>
              <li>Menyelaraskan teori sekolah dengan praktek industri</li>
              <li>Memenuhi syarat ketuntasan & kenaikan kelas</li>
              <li>Membangun keterampilan & kemandirian siswa</li>
            </ul>
          </div>

          {/* Manfaat */}
          <div className="card-wrapper bg-white hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3 relative">
              <div className="small-pill-wrapper bg-yellow-300 rotate-6 absolute -top-14 -right-2">
                Manfaat
              </div>
            </div>
            <ul className="list-disc px-5 font-sniglet text-xl leading-relaxed tracking-wider opacity-80 flex flex-col gap-1">
              <li>
                <strong>Siswa:</strong> Mengasah keahlian & dilatih langsung
                oleh profesional
              </li>
              <li>
                <strong>Sekolah:</strong> Memperkuat sinergi & kerjasama
                link-and-match
              </li>
              <li>
                <strong>Industri:</strong> Mendapat talenta muda yang kompeten &
                siap kerja
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🐰 ---------- CHAPTER TITLE & IMAGES ----------- 🐰 */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2">
        <h1 className="font-sniglet tracking-widest text-lg">
          Bab 1. Pendahuluan
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
