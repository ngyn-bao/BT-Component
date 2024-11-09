const NavComponent = () => {
  return (
    <nav className="bg-zinc-800 text-xl text-white py-4">
      <div className="container mx-auto w-9/12">
        <div className="content flex justify-between items-center">
          <div className="left-nav">
            <h3>
              <a href="#!">Start Bootstrap</a>
            </h3>
          </div>
          <div className="right-nav">
            <ul className="flex gap-5 text-base">
              <li>
                <a href="#!" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-gray-400 hover:text-gray-300 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
