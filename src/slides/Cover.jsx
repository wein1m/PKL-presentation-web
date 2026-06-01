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
        <div>
          <div className="font-sniglet tracking-widest">
            <p className="text-2xl">by Made Yodha Waradana Udita</p>
            <p className="text-2xl">7121 • XI RPL 3</p>
          </div>
        </div>

        <img src={swiggleUnderline} alt="underline" className="mt-4" />
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
