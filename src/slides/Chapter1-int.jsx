import BounceCards from "../components/BounceCards";

import int1 from "../assets/office/int-1.png";
import int2 from "../assets/office/int-2.jpeg";
import int3 from "../assets/office/int-3.png";
import int4 from "../assets/office/int-4.jpeg";

import dorritos from "../assets/elements/dorritos.png";
import wavingLeftBot from "../assets/elements/waving-bottom_left.png";
import pointingRightBot from "../assets/elements/pointing-bottom_right.png";
import rocket from "../assets/elements/rocket.png";

export default function Chapter1Int() {
  const images = [int2, int1, int3, int4];

  const transformStyles = [
    "rotate(5deg) translate(-180px)",
    "rotate(-3deg) translate(-90px)",
    "rotate(2deg)",
    "rotate(5deg) translate(90px)",
  ];

  return (
    <section className="page-wrapper">
      <div className="content-wrapper gap-16">
        {/* 🐰 ---------- LEFT SIDE ----------- 🐰 */}
        <div className="w-1/2 content-section">
          <div className="title">
            <p>Lingkungan Kerja</p>
            <h1>Kondisi Ruangan</h1>
          </div>

          <p className="desc">
            Lingkungan kerja di Koding Akademi memiliki suasana yang nyaman,
            modern, dan mendukung produktivitas. Dengan konsep ruang kerja yang
            minimalis serta area kerja yang tertata rapi, suasana kerja terasa
            santai namun tetap profesional dan kolaboratif.
          </p>

          <div className="cards-container mt-4">
            <div className="transparent-card">
              <p>Suasana</p>
              <h3>Cozy & Kolaboratif</h3>
            </div>

            <div className="transparent-card">
              <p>Fasilitas</p>
              <h3>AC, WiFi & Whiteboard</h3>
            </div>

            <div className="transparent-card">
              <p>Area Kerja</p>
              <h3>Fleksibel & Nyaman</h3>
            </div>

            <div className="transparent-card">
              <p>Lingkungan</p>
              <h3>Bersih & Modern</h3>
            </div>
          </div>

          <img src={dorritos} className="absolute -top-18 -right-12 -rotate-4 w-44" />
        </div>

        {/* 🐰 ---------- RIGHT SIDE ----------- 🐰 */}
        <div className="w-1/2 relative flex items-center justify-center">
          <div className="small-pill-wrapper bg-yellow-300 z-999 rotate-8 absolute top-6 right-20">
            Cozy Workspace
          </div>

          <div className="scale-110 z-998 no-slide-nav">
            <BounceCards
              images={images}
              containerWidth={200}
              containerHeight={350}
              animationDelay={0.1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover={true}
            />
          </div>
        </div>
      </div>

      <img
        src={wavingLeftBot}
        alt=""
        className="absolute bottom-0 left-0 w-[14rem]"
      />
      <img
        src={pointingRightBot}
        alt=""
        className="absolute bottom-0 right-0 w-[25rem]"
      />
      <img
        src={rocket}
        alt=""
        className="absolute top-20 right-20 w-[10rem] -rotate-10"
      />
    </section>
  );
}
