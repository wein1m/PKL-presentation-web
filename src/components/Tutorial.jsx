import one from "../assets/projects/chatbot/one.jpeg";

export default function Tutorial() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-[999] no-slide-nav overflow-hidden">
      <div className="relative flex flex-col gap-8 p-10 bg-[#f9f2e9] w-[80rem] h-fit rounded-3xl">
        {/* 🐰 ---------- CONTENTS ----------- 🐰 */}
        <div className="flex flex-col w-full h-full">
          <div className="h-[36rem]">
            <img
              src={one}
              className="w-full h-full object-cover rounded-2xl border border-black"
            />
          </div>
          <div className="max-w-5xl">
            <h1 className="text-4xl font-bold text-black mt-8">
              1. Buat Project baru di Google Colab
            </h1>
            <p className="text-xl mt-2 opacity-80 font-sniglet tracking-wider">
              Buka <a className="text-[#323cbe] underline">Google Collab </a>{" "}
              dan buat project baru dengan menekan tombol "New Notebook".
              Pastikan sudah login dengan akun Google-mu.
            </p>
          </div>

          {/* 🐰 ---------- NAVIGATION ----------- 🐰 */}
          <div className="flex flex-row justify-between mt-8">
            <div className="flex flex-row justify-center items-center gap-2 text-lg font-sniglet tracking-widest text-white bg-black rounded-full py-2 px-6 opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
                />
              </svg>
              Prev Page
            </div>
            <div className="flex flex-row justify-center items-center gap-2 text-lg font-sniglet tracking-widest text-white bg-black rounded-full py-2 px-6">
              Next Page
              <svg
                className="rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* 🐰 ---------- MARKER ----------- 🐰 */}
        <div className="absolute top-20 -right-40">
          <div className="bookmark-tabs">AI Chatbot</div>
          <div className="bookmark-tabs bg-blue-400 mt-4 w-10"></div>
          <div className="bookmark-tabs bg-green-400 mt-4 w-10"></div>
        </div>

        {/* 🐰 ---------- CLOSE BTN ----------- 🐰 */}
        <div className="absolute -top-5 -left-5 bg-[#dd3f5d] rounded-full p-3 text-white font-sniglet tracking-widest text-lg flex flex-row gap-2 justify-center items-center aspect-square">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#fff"
              d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
