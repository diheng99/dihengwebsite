import Link from "next/link";

const TopBar: React.FC = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-md flex justify-between items-center px-8 py-4">
      {/* Profile Section */}
      <h1 className="text-black text-lg font-bold">Di Heng</h1>

      {/* Navigation Links */}
      <nav className="flex gap-10">
        <Link href="/home" className="text-black text-base font-medium hover:bg-gray-100 px-3 py-1 rounded transition">
          <span role="img" aria-label="home" className="mr-1">🏠</span> Home
        </Link>
        {/* <Link href="/about" className="text-black text-base font-medium hover:bg-gray-100 px-3 py-1 rounded transition">
          <span role="img" aria-label="profile" className="mr-1">👤</span> About Me
        </Link> */}
      </nav>
    </div>
  );
};

export default TopBar;
