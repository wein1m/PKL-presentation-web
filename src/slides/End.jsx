import swiggleUnderline from "../assets/elements/swiggle-underline.png";

import wavingLeftBot from "../assets/elements/waving-bottom_left.png";
import pointingLeftTop from "../assets/elements/pointing-top_left.png";
import writingRightTop from "../assets/elements/writing-top_right.png";
import pointingRightBot from "../assets/elements/pointing-bottom_right.png";

export default function End() {
  return (
    <section className="page-wrapper overflow-hidden">
      <div className="relative border-[4px] bg-[#f9f3e8] border-black px-20 py-16 rotate-[-3deg] flex flex-col items-center text-center w-[46rem] overflow-hidden border-t-0 border-b-0">
        {/* TOP RECEIPT CUTS */}
        <div className="absolute top-[0.4px] left-0 w-full flex justify-between px-1 z-20">
          {Array.from({ length: 26 }).map((_, i) => (
            <div
              key={i}
              className=" w-6 h-6 rotate-45 border-[4px] border-black -translate-y-1/2 bg-[#f9f2e9] " />
          ))}
        </div>

        {/* BOTTOM RECEIPT CUTS */}
        <div className="absolute bottom-[0.4px] left-0 w-full flex justify-between px-1 z-20">
          {Array.from({ length: 26 }).map((_, i) => (
            <div
              key={i}
              className="w-6 h-6 rotate-45 border-[4px] border-black translate-y-1/2 bg-[#f9f2e9]"
            />
          ))}
        </div>
        <div className="w-full flex justify-between text-sm font-bold opacity-60 mb-8 tracking-widest">
          <p>KODING AKADEMI ID</p>
          <p>THANK YOU FOR WATCHING</p>
        </div>
        <div className="w-full border-t-[3px] border-dashed border-black mb-8" />
        <p className="text-2xl opacity-70 mb-3">
          Presentasi Laporan Praktik Kerja Lapangan
        </p>
        <h1 className="text-8xl font-black leading-none">
          Terima
          <br />
          Kasih
        </h1>
        <img
          src={swiggleUnderline}
          alt="underline"
          className="mt-5 w-[24rem]"
        />
        <div className="mt-10 flex flex-col gap-2 font-sniglet tracking-wider">
          <p className="text-2xl">
            Terima kasih telah menyimak presentasi ini !!
          </p>

          <p className="text-xl opacity-60">
            Sampai jumpa dan semoga harimu menyenangkan~!
          </p>
        </div>
        <div className="w-full border-t-[3px] border-dashed border-black my-10" />
        <div className="w-full flex justify-between items-end">
          <div className="text-left">
            <p className="text-lg opacity-60 mb-1">Presented by</p>

            <h3 className="text-3xl font-black leading-none">
              Made Yodha
              <br />
              Waradana Udita
            </h3>
          </div>

          <div className="text-right">
            <p className="text-lg opacity-60 mb-1">Class</p>
            <h3 className="text-3xl font-black">XI RPL 3</h3>
          </div>
        </div>
        <div className="mt-10 text-sm opacity-50 font-sniglet tracking-[0.3em]">
          7121 • PKL PRESENTATION • 2026
        </div>
      </div>

      <img
        src={wavingLeftBot}
        alt="waving-hand"
        className="absolute bottom-0 left-0 w-[18rem]"
      />

      <img
        src={pointingLeftTop}
        alt="pointing-hand"
        className="absolute top-0 left-0 w-[18rem]"
      />

      <img
        src={writingRightTop}
        alt="writing-hand"
        className="absolute top-0 right-0 w-[18rem]"
      />

      <img
        src={pointingRightBot}
        alt="pointing-hand"
        className="absolute bottom-0 right-0 w-[20rem]"
      />
    </section>
  );
}
