import paragraphs from "./intro-paragraphs";

const Intro = () => {
  return (
    <div className="min-h-screen w-full">
      <ul className="w-full sm:w-2/3 flex flex-col mx-auto">
        {paragraphs.split("\n\n").map((p, index) => (
          <li
            className={`p-10 sm:p-20 even:bg-slate-200/50`}
            key={index}
          >
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Intro;
