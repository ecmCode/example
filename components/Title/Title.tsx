const Title = () => {
  return (
    <div className="min-h-[30vh] sm:min-h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-semibold mb-4 ">Hi, I am John Doe.</h1>
        <p className="text-gray-600">Let me tell you about myself.</p>
        <hr className="border-t-4 w-full mt-6 h-full border-slate-900"/>
      </div>
    </div>
  );
};

export default Title;
