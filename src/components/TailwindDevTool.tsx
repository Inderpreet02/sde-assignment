const TailwindDevTool = () => {
  return (
    <div className="fixed bottom-4 left-4 bg-secondaryColor p-2 rounded-lg shadow-lg z-50 text-white">
      <span className="sm:hidden">default</span>
      <span className="hidden sm:inline md:hidden">sm</span>
      <span className="hidden md:inline lg:hidden">md</span>
      <span className="hidden lg:inline xl:hidden">lg</span>
      <span className="hidden xl:inline">xl</span>
    </div>
  );
};

export default TailwindDevTool;
