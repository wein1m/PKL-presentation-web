export default function ChapterIntro({ bab, title }) {
  return (
    <section className="page-wrapper">
      <div className="text-center flex flex-col items-center justify-center p-12 w-full h-full">
        <p className="text-9xl mb-6 font-black">Bab {bab}.</p>
        <h1 className="text-7xl font-black leading-tight max-w-[60rem]">
          {title}
        </h1>
      </div>
    </section>
  );
}
