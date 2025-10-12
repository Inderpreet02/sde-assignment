const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-1 border-gray-300 pb-2">
      <img
        src="https://play-lh.googleusercontent.com/SwtThQq2i2sn6OlurfvWdXhb0ecp6zma7CHIJ_-73TBwo6fhVFfiC1lQVzMvNC1TBw=w600-h300-pc0xffffff-pd"
        alt="logo-url"
        className="h-10"
      />

      <div className="flex gap-4 text-secondaryColor font-bold">
        <div className="hover:underline cursor-pointer">History</div>
        <div className="hover:underline cursor-pointer">New Chat</div>
      </div>
    </div>
  );
};

export default Header;
