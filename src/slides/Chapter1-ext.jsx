import officeOut from "../assets/office/ext.png";

import wavingLeftBot from "../assets/elements/waving-bottom_left.png";
import pointingRightBot from "../assets/elements/pointing-bottom_right.png";
import dorritos from "../assets/elements/dorritos.png";
import rocket from "../assets/elements/rocket.png";

export default function Chapter1() {
  return (
    <section className="page-wrapper">
      <div className="content-wrapper gap-20">
        {/* 🐰 ---------- LEFT SIDE (IMG) ----------- 🐰 */}
        <div className="w-[45%] flex justify-end">
          <div className="relative">
            <div className="small-pill-wrapper bg-yellow-300 z-10 absolute -top-3 -left-6">
              <p>Our Office</p>
            </div>

            <div className="h-[40rem] w-[30rem] rotate-[-6deg]">
              <img
                src={officeOut}
                alt="Koding Akademi Office"
                className="h-[40rem] w-[30rem] object-cover size-full card-wrapper p-2"
              />
            </div>
          </div>
        </div>

        {/* 🐰 ---------- RIGHT SIDE ----------- 🐰 */}
        <div className="w-[55%] content-section">
          <div className="title">
            <p>Tempat PKL Saya</p>
            <h1>Koding Akademi</h1>
          </div>

          <p className="desc">
            Koding Akademi merupakan perusahaan yang bergerak di bidang
            teknologi dan pendidikan digital, dengan fokus pada pengembangan
            website, aplikasi, dan pembelajaran programming modern.
          </p>

          <div className="cards-container">
            <div className="transparent-card">
              <p>Pimpinan</p>
              <h3>...</h3>
            </div>

            <div className="transparent-card">
              <p>Website</p>
              <h3>kodingakademi.id</h3>
            </div>

            <div className="transparent-card col-span-2">
              <p>Alamat</p>
              <h3 className="leading-relaxed w-full">
                Jl. Tukad Batanghari No. 55, Denpasar, Bali
              </h3>
            </div>
          </div>
          <img
            src={dorritos}
            className="absolute -top-20 right-16 -rotate-12 w-44"
          />
        </div>
      </div>

      <img
        src={wavingLeftBot}
        alt=""
        className="absolute bottom-0 left-0 w-[16rem]"
      />
      <img
        src={pointingRightBot}
        alt=""
        className="absolute bottom-0 right-0 w-[18rem]"
      />
      <img src={rocket} alt="" className="absolute top-10 left-10 w-[10rem]" />
    </section>
  );
}
