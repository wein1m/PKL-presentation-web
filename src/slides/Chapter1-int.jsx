import BounceCards from "../components/BounceCards";

import int1 from "../assets/office/int-1.png";
import int2 from "../assets/office/int-2.png";
import int3 from "../assets/office/int-3.png";
import int4 from "../assets/office/int-4.png";

import dorritos from "../assets/elements/dorritos.png";
import wavingLeftBot from "../assets/elements/waving-bottom_left.png";
import pointingRightBot from "../assets/elements/pointing-bottom_right.png";
import rocket from "../assets/elements/rocket.png";

export default function Chapter1Int() {
  const images = [int4, int1, int3, int2];

  const transformStyles = [
    "rotate(5deg) translate(-180px)",
    "rotate(-3deg) translate(-90px)",
    "rotate(2deg)",
    "rotate(5deg) translate(90px)",
  ];

  return (
    <div className="page-wrapper relative overflow-hidden">
      <div className="flex h-full items-center px-48 gap-16 relative z-10">
        {/* 🐰 ---------- LEFT SIDE ----------- 🐰 */}
        <div className="w-1/2 flex flex-col gap-4 relative">
          <div>
            <p className="text-2xl opacity-70 mb-2">Lingkungan Kerja</p>

            <h1 className="text-7xl font-black leading-none">
              Kondisi Ruangan
            </h1>
          </div>

          <p className="text-2xl leading-relaxed opacity-80 max-w-[90%]">
            Lingkungan kerja di Koding Akademi memiliki suasana yang nyaman,
            modern, dan mendukung produktivitas. Dengan konsep ruang kerja yang
            minimalis serta area kerja yang tertata rapi, suasana kerja terasa
            santai namun tetap profesional dan kolaboratif.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-4">
            <div className="p-6">
              <p className="text-lg opacity-60">Suasana</p>

              <h3 className="text-2xl font-bold mt-2">Cozy & Kolaboratif</h3>
            </div>

            <div className="p-6">
              <p className="text-lg opacity-60">Fasilitas</p>

              <h3 className="text-2xl font-bold mt-2">AC, WiFi & Whiteboard</h3>
            </div>

            <div className="p-6">
              <p className="text-lg opacity-60">Area Kerja</p>

              <h3 className="text-2xl font-bold mt-2">Fleksibel & Nyaman</h3>
            </div>

            <div className="p-6">
              <p className="text-lg opacity-60">Lingkungan</p>

              <h3 className="text-2xl font-bold mt-2">Bersih & Modern</h3>
            </div>
          </div>

          <img src={dorritos} className="absolute -top-18 -right-20 w-44" />
        </div>

        {/* 🐰 ---------- RIGHT SIDE ----------- 🐰 */}
        <div className="w-1/2 relative flex items-center justify-center">
          <div className="absolute top-2 right-20 z-20">
            <div className="bg-yellow-300 text-black px-6 py-3 rounded-full rotate-8 font-bold shadow-xl">
              Cozy Workspace
            </div>
          </div>

          <div className="scale-110">
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
    </div>
  );
}
