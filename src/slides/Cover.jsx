import swiggleUnderline from "../assets/elements/swiggle-underline.png";
import wavingLeftBot from "../assets/elements/waving-bottom_left.png";
import pointingLeftTop from "../assets/elements/pointing-top_left.png";
import writingRightTop from "../assets/elements/writing-top_right.png";
import pointingRightBot from "../assets/elements/pointing-bottom_right.png";

export default function Cover() {
  return (
    <section className="page-wrapper">
      <div className="text-center flex flex-col items-center">
        <p className="text-3xl mb-4">
          Presentasi Laporan Praktik Kerja Lapangan
        </p>

        <h1 className="text-9xl font-bold ">Koding Akademi</h1>

        <img src={swiggleUnderline} alt="underline" className="mt-4" />

        <div className="mt-14 rotate-[-2deg] card-wrapper px-8 py-5">
          <p className="text-lg opacity-60 mb-1">Presented by</p>
          <h3 className="text-3xl font-black">Made Yodha Waradana Udita</h3>
          <p className="text-lg mt-2 opacity-70">XI RPL 3 • 7121</p>
        </div>
      </div>

      <img
        src={wavingLeftBot}
        alt="waving-hand"
        className="absolute bottom-0 left-0 w-[20rem]"
      />
      <img
        src={pointingLeftTop}
        alt="waving-hand"
        className="absolute top-0 left-0 w-[20rem]"
      />
      <img
        src={writingRightTop}
        alt="waving-hand"
        className="absolute top-0 right-0 w-[20rem]"
      />
      <img
        src={pointingRightBot}
        alt="waving-hand"
        className="absolute bottom-0 right-0 w-[25rem]"
      />
    </section>
  );
}
