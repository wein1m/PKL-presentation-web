import officeOut from "../assets/office-out.png";
import wavingLeftBot from "../assets/waving-bottom_left.png";
import pointingRightBot from "../assets/pointing-bottom_right.png";
import dorritos from "../assets/dorritos.png";
import rocket from "../assets/rocket.png";

export default function Chapter1() {
  return (
    <div className="page-wrapper overflow-hidden relative">
      <div className="flex flex-row items-center justify-between px-32 py-20 gap-20">
        {/* 🐰 ---------- LEFT SIDE (IMG) ----------- 🐰 */}
        <div className="w-[45%] flex justify-end">
          <div className="relative">
            <div className="absolute -top-3 -left-6 bg-yellow-300 px-6 py-2 rounded-full rotate-[-10deg] shadow-lg z-10">
              <p className="text-xl font-bold">Our Office</p>
              {/* <img
                src={dorritos}
                alt="dorritos"
                className="w-16 absolute -top-10 -right-12"
              /> */}
            </div>

            <div className="h-[40rem] w-[30rem] rounded-[2rem] rotate-[-6deg] shadow-2xl">
              <img
                src={officeOut}
                alt="Koding Akademi Office"
                className=" border-[10px] border-white h-[40rem] w-[30rem] object-cover size-full"
              />
            </div>
          </div>
        </div>

        {/* 🐰 ---------- RIGHT SIDE ----------- 🐰 */}
        <div className="relative w-[55%] flex flex-col gap-10">
          <div>
            <p className="text-2xl mb-2 opacity-70">Tempat PKL Saya</p>

            <h1 className="text-7xl font-black leading-none">Koding Akademi</h1>
          </div>

          <p className="text-2xl leading-relaxed opacity-80">
            Koding Akademi merupakan perusahaan yang bergerak di bidang
            teknologi dan pendidikan digital, dengan fokus pada pengembangan
            website, aplikasi, dan pembelajaran programming modern.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem]">
              <p className="text-lg opacity-60">Pimpinan</p>
              <h3 className="text-2xl font-bold">...</h3>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem]">
              <p className="text-lg opacity-60">Website</p>
              <h3 className="text-2xl font-bold">kodingakademi.id</h3>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] col-span-2">
              <p className="text-lg opacity-60">Alamat</p>
              <h3 className="text-2xl font-bold leading-relaxed">
                Jl. Tukad Batanghari No. 55, Denpasar, Bali
              </h3>
            </div>
          </div>
          <img src={dorritos} class="absolute -top-20 right-20 w-44" />
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
    </div>
  );
}
