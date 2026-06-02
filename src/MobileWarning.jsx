export default function MobileWarning() {
  const isMobile = window.innerWidth < 768;

  const onClick = () => {};

  return isMobile ? (
    <div
      id="mobile-warning"
      className="slides-wrapper fixed inset-0 z-50 flex flex-col items-center justify-center text-center p-12"
    >
      <h1 className="text-5xl font-black mb-4">
        fun fact: <br />
        This page looks the best on Desktop!
      </h1>
      <p className="font-sniglet text-xl opacity-70">
        I designed this presentation for big screen! <br />
        It might looks a bit.. weird here.
      </p>

      <button
        onClick={() => {
          document.querySelector("#mobile-warning").style.display = "none";
        }}
        className="small-pill-wrapper bg-yellow-300 rotate-0 text-2xl py-2 mt-10 hover:cursor-pointer hover:shadow-none hover:translate-x-1.25 hover:translate-y-1.25 active:shadow-none active:translate-x-1.25 active:translate-y-1.25 transition-all duration-200"
      >
        I just want to see !
      </button>
    </div>
  ) : null;
}
